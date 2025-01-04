import Scene from "~/scene";
import { describe, it, mock, expect } from "bun:test";

describe("Scene", () => {
  it("should have children", () => {
    const scene = new Scene();
    expect(scene.children).toEqual(new Map());
  });
  it("should add children", () => {
    const scene = new Scene();
    const child = new Scene();
    scene.addChild(child, {});
    expect(scene.children.has(child)).toBe(true);
    expect(child.parent).toBe(scene);
  });
  it("should remove children", () => {
    const scene = new Scene();
    const child = new Scene();
    scene.addChild(child, {});
    scene.removeChild(child);
    expect(scene.children.has(child)).toBe(false);
  });
  it("should update children", () => {
    const scene = new Scene();
    const child = new Scene();
    child.update = mock();
    scene.addChild(child, {});
    scene.update();
    expect(child.update).toBeCalled();
  });
  it("should declare children", () => {
    const child = new Scene();
    const scene = new Scene({
      children: [
        {
          scene: child,
          props: {
            prop1: () => 1,
            prop2: () => 2,
          },
        },
      ],
    });
    expect(scene.children.has(child)).toBe(true);
  });
  it("should need props", () => {
    interface Props {
      prop1: number;
      prop2: number;
    }
    const scene = new Scene<Props>();
    scene.need(["prop1", "prop2"]);
    expect(scene.props).toEqual(new Set(["prop1", "prop2"]));
  });
  it("should unneed props", () => {
    const scene = new Scene<{ prop1: number; prop2: number }>();
    scene.need(["prop1", "prop2"]);
    scene.unneed(["prop1"]);
    expect(scene.props).toEqual(new Set(["prop2"]));
  });
});
