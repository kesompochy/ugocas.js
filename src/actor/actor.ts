import Scene from "../scene";

export default class Actor<T extends object = {}> extends Scene {
  action: (delta?: number, props?: T) => void = () => {};
  constructor() {
    super();
  }

  update(delta?: number, props?: T) {
    this.action(delta, props);
    super.update(delta, props);
  }

  act(callback: (delta?: number, props?: T) => void) {
    this.action = callback;
  }
}
