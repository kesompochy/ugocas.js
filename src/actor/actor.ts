import Scene from "../scene";

export default class Actor<T extends object = {}> extends Scene {
  action: (delta?: number, props?: T) => void = () => {};
  constructor() {
    super();
  }

  update(delta?: number, props?: T) {
    this.action(delta, props);

    this.children.forEach((propsMap, scene) => {
      const data = {};
      scene.props.forEach((name: string) => {
        data[name] = propsMap[name]();
      });
      scene.update(delta, data);
    });
  }

  act(callback: (delta?: number, props?: T) => void) {
    this.action = callback;
  }
}
