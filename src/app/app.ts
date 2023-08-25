import Ticker from "../ticker";
import Scene from "../scene";
import { TickingFunc } from "../ticker/ticker";
interface IAppOptions {
  autoStart?: boolean;
}
const defaultAppOptions: IAppOptions = {
  autoStart: false,
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
  stop(): void {
    this.ticker.stop();
  }

  mainLoop: TickingFunc = (delta, info) => {
    this.baseScene.update(delta, info);
  };
}
