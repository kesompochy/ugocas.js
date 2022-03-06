import * as EGAK from 'egak.js';
import * as NARAS from 'naras.js';
import Ticker from '../ticker';
import Scene from '../scene';


interface IAppOptions {
    width?: number;
    height?: number;
    autoStart?: boolean;
    canvas?: HTMLCanvasElement;
    autoStyleCanvas?: boolean;

}
const defaultAppOptions: IAppOptions = {
    width: 300,
    height: 400,
    autoStart: false,
    canvas: document.createElement('canvas'),
    autoStyleCanvas: false,
} as const;
 
export default class App {
    renderSystem: EGAK.App;
    soundSystem: NARAS.App;
    ticker: Ticker = new Ticker();
    baseScene: Scene;
    private _width: number = 0;
    private _height: number = 0;

    constructor(options?: IAppOptions){
        options = Object.assign(defaultAppOptions, options);

        this._width = options.width!;
        this._height = options.height!;


        this.renderSystem = new EGAK.App({
            width: this._width,
            height: this._height,
            canvas: options.canvas!
        })
        this.soundSystem = new NARAS.App();

        this.baseScene = new Scene();
        this.renderSystem.baseStage.addChild(this.baseScene.stage);
        this.soundSystem.baseMixer.addChild(this.baseScene.mixer);

        this.renderSystem.loader.loadThen(()=>{
            if(this.soundSystem.loaded){
                this._loadThen();
            }
        })
        this.soundSystem.loader.loadThen(()=>{
            if(this.renderSystem.loaded){
                this._loadThen();
            }
        })


        this.ticker.add(this.mainLoop.bind(this));
        if(options.autoStart!){
            this.ticker.start();
        }
    }
    start(): void{
        this.ticker.start();
    }
    addImage(id: string, src: string): this{
        this.renderSystem.addResource(id, src);
        return this;
    }
    addSound(id: string, src: string): this{
        this.soundSystem.addResource(id, src);
        return this;
    }
    loadAll(): void{
        this.renderSystem.loadAll();
        this.soundSystem.loadAll();
    }
    getTexture(id: string): EGAK.Texture{
        return this.renderSystem.loader.get(id);
    }
    getAudio(id: string): NARAS.Audio{
        return this.soundSystem.loader.get(id);
    }

    private _loadThen: Function = ()=>{};
    loadThen(func: Function): void{
        this._loadThen = func;
    }

    mainLoop: (delta: number, info?: Object)=>void = (delta, info)=>{
        this.renderSystem.clearScreen(0, 0, 0, 1);
        this.baseScene.update(delta, info);
        this.renderSystem.render();
    }
}