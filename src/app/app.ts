import Ticker from "../ticker";
import Scene from "../scene";
import { TickingFunc } from "../ticker/ticker";

interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

interface IAppOptions {
  width?: number;
  height?: number;
  autoStart?: boolean;
  canvas?: HTMLCanvasElement;
  autoStyleCanvas?: boolean;
  backgroundColor?: Color;
}
const defaultAppOptions: IAppOptions = {
  width: 300,
  height: 400,
  autoStart: false,
  canvas: document.createElement("canvas"),
  autoStyleCanvas: false,
  backgroundColor: { r: 0, g: 0, b: 0, a: 1 },
} as const;

export default class App {
  ticker: Ticker = new Ticker();
  baseScene: Scene;

  constructor(options?: IAppOptions) {
    options = Object.assign(defaultAppOptions, options);

    this.baseScene = new Scene();

    this.ticker.add(this.mainLoop.bind(this));
    if (options.autoStart!) {
      this.ticker.start();
    }
  }
  start(): void {
    this.ticker.start();
  }

  mainLoop: TickingFunc = (delta, info) => {
    this.baseScene.update(delta, info);
  };
}
