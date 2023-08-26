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
  ticker: Ticker;
  baseScene: Scene;

  constructor(options?: IAppOptions) {
    options = Object.assign(defaultAppOptions, options);

    this.baseScene = new Scene();

    this.ticker = new Ticker({
      FPS: 60,
      permittedDelay: 2,
      jobs: [this.mainLoop.bind(this)],
    });
    if (options.autoStart!) {
      this.start();
    }
  }
  start(): void {
    this.ticker.start();
  }
  stop(): void {
    this.ticker.stop();
  }

  private mainLoop: TickingFunc = (delta, info) => {
    this.baseScene.update(delta, info);
  };
}
