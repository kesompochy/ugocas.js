import { describe, expect, it } from "bun:test";
import {
  resolveCircleEdgesCollision,
  type CircleState,
  type OrientedEdge,
  type Vector,
} from "~/physics/collision";

const edge = (start: Vector, end: Vector, normal: Vector): OrientedEdge => ({
  start,
  end,
  normal,
});

describe("resolveCircleEdgesCollision", () => {
  it("removes penetration and velocity along the normal for a horizontal edge", () => {
    const initial: CircleState = {
      center: { x: 0, y: 15 },
      radius: 20,
      velocity: { x: 0, y: -5 },
    };
    const edges = [edge({ x: -100, y: 0 }, { x: 100, y: 0 }, { x: 0, y: 1 })];

    const result = resolveCircleEdgesCollision(initial, edges);

    expect(result.center.y).toBeCloseTo(20);
    expect(result.center.x).toBeCloseTo(0);
    expect(result.velocity.y).toBeCloseTo(0);
    expect(result.velocity.x).toBeCloseTo(0);
  });

  it("slides along the edge when velocity is tangent", () => {
    const initial: CircleState = {
      center: { x: -5, y: 15 },
      radius: 20,
      velocity: { x: 3, y: -4 },
    };
    const edges = [edge({ x: -100, y: 0 }, { x: 100, y: 0 }, { x: 0, y: 1 })];

    const result = resolveCircleEdgesCollision(initial, edges);

    expect(result.center.y).toBeCloseTo(20);
    expect(result.velocity.y).toBeCloseTo(0);
    expect(result.velocity.x).toBeCloseTo(3);
  });

  it("resolves penetration against a vertical edge", () => {
    const initial: CircleState = {
      center: { x: 2, y: 0 },
      radius: 5,
      velocity: { x: -2, y: 1 },
    };
    const edges = [edge({ x: 0, y: -100 }, { x: 0, y: 100 }, { x: 1, y: 0 })];

    const result = resolveCircleEdgesCollision(initial, edges);

    expect(result.center.x).toBeCloseTo(5);
    expect(result.velocity.x).toBeCloseTo(0);
    expect(result.velocity.y).toBeCloseTo(1);
  });
});
