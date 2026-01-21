export type Vector = {
  x: number;
  y: number;
};

export type CircleState = {
  center: Vector;
  radius: number;
  velocity: Vector;
};

export type OrientedEdge = {
  start: Vector;
  end: Vector;
  normal: Vector;
};

const clamp = (value: number, min: number, max: number): number => {
  if (value < min) return min;
  if (value > max) return max;
  return value;
};

const magnitude = (vector: Vector): number => Math.hypot(vector.x, vector.y);

const normalize = (vector: Vector): Vector => {
  const length = magnitude(vector);
  if (length === 0) {
    return { x: 0, y: 0 };
  }
  return { x: vector.x / length, y: vector.y / length };
};

export const closestPointOnSegment = (point: Vector, start: Vector, end: Vector): Vector => {
  const segX = end.x - start.x;
  const segY = end.y - start.y;
  const segLengthSquared = segX * segX + segY * segY;

  if (segLengthSquared === 0) {
    return { x: start.x, y: start.y };
  }

  const t = ((point.x - start.x) * segX + (point.y - start.y) * segY) / segLengthSquared;
  const clamped = clamp(t, 0, 1);
  return { x: start.x + segX * clamped, y: start.y + segY * clamped };
};

export const resolveCircleEdgesCollision = (circle: CircleState, edges: readonly OrientedEdge[]): CircleState => {
  const center: Vector = { ...circle.center };
  const velocity: Vector = { ...circle.velocity };
  const radius = circle.radius;

  for (const edge of edges) {
    const closest = closestPointOnSegment(center, edge.start, edge.end);
    const diffX = center.x - closest.x;
    const diffY = center.y - closest.y;
    const distanceSquared = diffX * diffX + diffY * diffY;

    if (distanceSquared > radius * radius) {
      continue;
    }

    const distance = Math.sqrt(distanceSquared);
    const penetration = radius - distance;
    if (penetration <= 0) {
      continue;
    }

    let normal = normalize(edge.normal);
    if (distance > 0) {
      const pushDirection = { x: diffX / distance, y: diffY / distance };
      const dotProduct = pushDirection.x * normal.x + pushDirection.y * normal.y;
      if (dotProduct > 0) {
        normal = pushDirection;
      }
    }

    center.x += normal.x * penetration;
    center.y += normal.y * penetration;

    const velocityAlongNormal = velocity.x * normal.x + velocity.y * normal.y;
    if (velocityAlongNormal < 0) {
      velocity.x -= velocityAlongNormal * normal.x;
      velocity.y -= velocityAlongNormal * normal.y;
    }
  }

  return {
    center,
    radius,
    velocity,
  };
};

export type SweptEdge = {
  previous: OrientedEdge;
  current: OrientedEdge;
};

const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;

const lerpVector = (a: Vector, b: Vector, t: number): Vector => ({
  x: lerp(a.x, b.x, t),
  y: lerp(a.y, b.y, t),
});

const lerpEdge = (previous: OrientedEdge, current: OrientedEdge, t: number): OrientedEdge => ({
  start: lerpVector(previous.start, current.start, t),
  end: lerpVector(previous.end, current.end, t),
  normal: normalize(lerpVector(previous.normal, current.normal, t)),
});

const distanceToEdge = (center: Vector, edge: OrientedEdge): number => {
  const closest = closestPointOnSegment(center, edge.start, edge.end);
  return Math.hypot(center.x - closest.x, center.y - closest.y);
};

const isColliding = (center: Vector, radius: number, edge: OrientedEdge): boolean => {
  return distanceToEdge(center, edge) < radius;
};

const findMinDistanceTime = (
  center: Vector,
  radius: number,
  previous: OrientedEdge,
  current: OrientedEdge,
  samples: number = 20
): { time: number; distance: number } => {
  let minTime = 0;
  let minDistance = distanceToEdge(center, previous);

  for (let i = 1; i <= samples; i++) {
    const t = i / samples;
    const edge = lerpEdge(previous, current, t);
    const dist = distanceToEdge(center, edge);
    if (dist < minDistance) {
      minDistance = dist;
      minTime = t;
    }
  }

  return { time: minTime, distance: minDistance };
};

export const detectCircleSweptEdgeCollisionTime = (
  center: Vector,
  radius: number,
  sweptEdge: SweptEdge,
  iterations: number = 10
): number | null => {
  const { previous, current } = sweptEdge;

  const collidingAtStart = isColliding(center, radius, previous);

  if (collidingAtStart) {
    return 0;
  }

  const { time: minTime, distance: minDistance } = findMinDistanceTime(center, radius, previous, current);

  if (minDistance >= radius) {
    return null;
  }

  let low = 0;
  let high = minTime;

  for (let i = 0; i < iterations; i++) {
    const mid = (low + high) / 2;
    const interpolatedEdge = lerpEdge(previous, current, mid);

    if (isColliding(center, radius, interpolatedEdge)) {
      high = mid;
    } else {
      low = mid;
    }
  }

  return high;
};

export const resolveCircleSweptEdgesCollision = (
  circle: CircleState,
  sweptEdges: readonly SweptEdge[]
): CircleState => {
  const center: Vector = { ...circle.center };
  const velocity: Vector = { ...circle.velocity };
  const radius = circle.radius;

  let earliestTime: number | null = null;
  let collidingEdgeIndex: number | null = null;

  for (const [i, sweptEdge] of sweptEdges.entries()) {
    const time = detectCircleSweptEdgeCollisionTime(center, radius, sweptEdge);
    if (time !== null && (earliestTime === null || time < earliestTime)) {
      earliestTime = time;
      collidingEdgeIndex = i;
    }
  }

  if (earliestTime === null || collidingEdgeIndex === null) {
    return circle;
  }

  const currentEdges: OrientedEdge[] = sweptEdges.map((se) => se.current);
  let newCenter: Vector = { ...center };
  let newVelocity: Vector = { ...velocity };

  const maxIterations = 10;
  for (let iter = 0; iter < maxIterations; iter++) {
    let anyCollision = false;

    for (const [i, sweptEdge] of sweptEdges.entries()) {
      const time = detectCircleSweptEdgeCollisionTime(newCenter, radius, sweptEdge);
      if (time === null) {
        continue;
      }

      anyCollision = true;
      const edge = currentEdges[i]!;
      const closest = closestPointOnSegment(newCenter, edge.start, edge.end);
      const edgeNormal = normalize(edge.normal);

      newCenter = {
        x: closest.x + edgeNormal.x * radius,
        y: closest.y + edgeNormal.y * radius,
      };

      const velocityAlongNormal = newVelocity.x * edgeNormal.x + newVelocity.y * edgeNormal.y;
      if (velocityAlongNormal < 0) {
        newVelocity.x -= velocityAlongNormal * edgeNormal.x;
        newVelocity.y -= velocityAlongNormal * edgeNormal.y;
      }
    }

    if (!anyCollision) {
      break;
    }
  }

  return resolveCircleEdgesCollision({ center: newCenter, radius, velocity: newVelocity }, currentEdges);
};
