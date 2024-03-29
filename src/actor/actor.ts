import Scene from "../scene";
import { TickingFunc } from "../ticker/ticker";

export default class Actor extends Scene {
  constructor() {
    super();
  }

  update(delta?: number, givenInfo?: Object) {
    this.act(delta, givenInfo);

    this.children.forEach((actor: Scene) => {
      const info = {};
      actor.needsInfoNames.forEach((name: string) => {
        info[name] = this[name];
      });
      actor.update(delta, info);
    });
  }

  act(delta?: number, info?: Object) {}
}
