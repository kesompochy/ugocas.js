import { describe, expect, it } from "bun:test";
import {
  detectCircleSweptEdgeCollisionTime,
  resolveCircleSweptEdgesCollision,
  resolveCircleEdgesCollision,
  type CircleState,
  type OrientedEdge,
  type SweptEdge,
  type Vector,
} from "~/physics/collision";

const edge = (start: Vector, end: Vector, normal: Vector): OrientedEdge => ({
  start,
  end,
  normal,
});

const sweptEdge = (previous: OrientedEdge, current: OrientedEdge): SweptEdge => ({
  previous,
  current,
});

describe("detectCircleSweptEdgeCollisionTime", () => {
  it("returns null when edge never collides with circle", () => {
    const center: Vector = { x: 0, y: 100 };
    const radius = 10;
    const swept = sweptEdge(
      edge({ x: -50, y: 0 }, { x: 50, y: 0 }, { x: 0, y: 1 }),
      edge({ x: -50, y: 10 }, { x: 50, y: 10 }, { x: 0, y: 1 })
    );

    const result = detectCircleSweptEdgeCollisionTime(center, radius, swept);

    expect(result).toBeNull();
  });

  it("returns 0 when edge already collides at start", () => {
    const center: Vector = { x: 0, y: 5 };
    const radius = 10;
    const swept = sweptEdge(
      edge({ x: -50, y: 0 }, { x: 50, y: 0 }, { x: 0, y: 1 }),
      edge({ x: -50, y: 20 }, { x: 50, y: 20 }, { x: 0, y: 1 })
    );

    const result = detectCircleSweptEdgeCollisionTime(center, radius, swept);

    expect(result).toBe(0);
  });

  it("returns collision time when edge sweeps through circle", () => {
    const center: Vector = { x: 0, y: 50 };
    const radius = 10;
    const swept = sweptEdge(
      edge({ x: -50, y: 0 }, { x: 50, y: 0 }, { x: 0, y: 1 }),
      edge({ x: -50, y: 100 }, { x: 50, y: 100 }, { x: 0, y: 1 })
    );

    const result = detectCircleSweptEdgeCollisionTime(center, radius, swept);

    expect(result).not.toBeNull();
    expect(result!).toBeGreaterThan(0);
    expect(result!).toBeLessThan(1);
    expect(result!).toBeCloseTo(0.4, 1);
  });

  it("detects collision for vertical edge sweeping horizontally", () => {
    const center: Vector = { x: 50, y: 0 };
    const radius = 10;
    const swept = sweptEdge(
      edge({ x: 0, y: -50 }, { x: 0, y: 50 }, { x: 1, y: 0 }),
      edge({ x: 100, y: -50 }, { x: 100, y: 50 }, { x: 1, y: 0 })
    );

    const result = detectCircleSweptEdgeCollisionTime(center, radius, swept);

    expect(result).not.toBeNull();
    expect(result!).toBeGreaterThan(0);
    expect(result!).toBeLessThan(1);
    expect(result!).toBeCloseTo(0.4, 1);
  });
});

describe("resolveCircleSweptEdgesCollision", () => {
  it("pushes ball to correct side when wall passes through it (upward)", () => {
    // ボールは(0, 50)にいる、半径10
    // 壁がy=0からy=100へ移動してボールを通過する
    // ボールは壁の上側（y >= 110）に押し出されるべき
    const initial: CircleState = {
      center: { x: 0, y: 50 },
      radius: 10,
      velocity: { x: 0, y: 0 },
    };
    const sweptEdges = [
      sweptEdge(
        edge({ x: -100, y: 0 }, { x: 100, y: 0 }, { x: 0, y: 1 }),    // t=0: y=0
        edge({ x: -100, y: 100 }, { x: 100, y: 100 }, { x: 0, y: 1 }) // t=1: y=100
      ),
    ];

    const result = resolveCircleSweptEdgesCollision(initial, sweptEdges);

    // ボールは壁の上側にいるべき（y >= 100 + radius）
    expect(result.center.y).toBeGreaterThanOrEqual(110);
  });

  it("handles ball at corner with two walls passing through", () => {
    // ボールは(50, 50)にいる、半径10
    // 2つの壁が同時にボールを通過する
    // 右の壁: x=100 → x=0（法線は左向き x=-1）ボールを通過
    // 下の壁: y=100 → y=0（法線は上向き y=-1）ボールを通過
    const initial: CircleState = {
      center: { x: 50, y: 50 },
      radius: 10,
      velocity: { x: 0, y: 0 },
    };
    const sweptEdges = [
      // 右の壁（縦線）
      sweptEdge(
        edge({ x: 100, y: -100 }, { x: 100, y: 200 }, { x: -1, y: 0 }),
        edge({ x: 0, y: -100 }, { x: 0, y: 200 }, { x: -1, y: 0 })
      ),
      // 下の壁（横線）
      sweptEdge(
        edge({ x: -100, y: 100 }, { x: 200, y: 100 }, { x: 0, y: -1 }),
        edge({ x: -100, y: 0 }, { x: 200, y: 0 }, { x: 0, y: -1 })
      ),
    ];

    const result = resolveCircleSweptEdgesCollision(initial, sweptEdges);

    // ボールは両方の壁の正しい側にいるべき
    // 右の壁(x=0)の左側: x <= 0 - 10 = -10
    // 下の壁(y=0)の上側: y <= 0 - 10 = -10
    expect(result.center.x).toBeLessThanOrEqual(-10);
    expect(result.center.y).toBeLessThanOrEqual(-10);
  });

  it("pushes ball to correct side when wall passes through it (downward)", () => {
    // ボールは(0, 50)にいる、半径10
    // 壁がy=100からy=0へ移動してボールを通過する
    // 壁の法線は下向き（y=-1）
    // ボールは壁の下側（y <= -10）に押し出されるべき
    const initial: CircleState = {
      center: { x: 0, y: 50 },
      radius: 10,
      velocity: { x: 0, y: 0 },
    };
    const sweptEdges = [
      sweptEdge(
        edge({ x: -100, y: 100 }, { x: 100, y: 100 }, { x: 0, y: -1 }), // t=0: y=100
        edge({ x: -100, y: 0 }, { x: 100, y: 0 }, { x: 0, y: -1 })     // t=1: y=0
      ),
    ];

    const result = resolveCircleSweptEdgesCollision(initial, sweptEdges);

    // ボールは壁の下側にいるべき（y <= 0 - radius）
    expect(result.center.y).toBeLessThanOrEqual(-10);
  });

  it("returns original state when no collision occurs", () => {
    const initial: CircleState = {
      center: { x: 0, y: 100 },
      radius: 10,
      velocity: { x: 0, y: -5 },
    };
    const sweptEdges = [
      sweptEdge(
        edge({ x: -50, y: 0 }, { x: 50, y: 0 }, { x: 0, y: 1 }),
        edge({ x: -50, y: 10 }, { x: 50, y: 10 }, { x: 0, y: 1 })
      ),
    ];

    const result = resolveCircleSweptEdgesCollision(initial, sweptEdges);

    expect(result.center.x).toBe(initial.center.x);
    expect(result.center.y).toBe(initial.center.y);
    expect(result.velocity.x).toBe(initial.velocity.x);
    expect(result.velocity.y).toBe(initial.velocity.y);
  });

  it("resolves collision when edge sweeps through circle", () => {
    const initial: CircleState = {
      center: { x: 0, y: 15 },
      radius: 10,
      velocity: { x: 0, y: -5 },
    };
    const sweptEdges = [
      sweptEdge(
        edge({ x: -50, y: -20 }, { x: 50, y: -20 }, { x: 0, y: 1 }),
        edge({ x: -50, y: 10 }, { x: 50, y: 10 }, { x: 0, y: 1 })
      ),
    ];

    const result = resolveCircleSweptEdgesCollision(initial, sweptEdges);

    expect(result.center.y).toBeCloseTo(20);
    expect(result.velocity.y).toBeCloseTo(0);
  });

  it("handles multiple swept edges and resolves earliest collision", () => {
    const initial: CircleState = {
      center: { x: 0, y: 0 },
      radius: 10,
      velocity: { x: -5, y: 0 },
    };
    const sweptEdges = [
      sweptEdge(
        edge({ x: -100, y: -50 }, { x: -100, y: 50 }, { x: 1, y: 0 }),
        edge({ x: -5, y: -50 }, { x: -5, y: 50 }, { x: 1, y: 0 })
      ),
      sweptEdge(
        edge({ x: 100, y: -50 }, { x: 100, y: 50 }, { x: -1, y: 0 }),
        edge({ x: 50, y: -50 }, { x: 50, y: 50 }, { x: -1, y: 0 })
      ),
    ];

    const result = resolveCircleSweptEdgesCollision(initial, sweptEdges);

    expect(result.center.x).toBeCloseTo(5);
    expect(result.velocity.x).toBeCloseTo(0);
  });
});
