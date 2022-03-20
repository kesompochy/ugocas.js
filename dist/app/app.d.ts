import * as EGAK from 'egak.js';
import * as NARAS from 'naras.js';
import Ticker from '../ticker';
import Scene from '../scene';
import { TickingFunc } from '../ticker/ticker';
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
export default class App {
    renderSystem: EGAK.App;
    soundSystem: NARAS.App;
    ticker: Ticker;
    baseScene: Scene;
    private _width;
    private _height;
    backgroundColor: Color;
    constructor(options?: IAppOptions);
    start(): void;
    addImage(id: string, src: string, scaleMode: string): this;
    addSound(id: string, src: string, scaleMode: string): this;
    loadAll(): void;
    getTexture(id: string): EGAK.Texture;
    getAudio(id: string): NARAS.Audio;
    private _loadThen;
    loadThen(func: Function): void;
    mainLoop: TickingFunc;
}
export {};
//# sourceMappingURL=app.d.ts.map