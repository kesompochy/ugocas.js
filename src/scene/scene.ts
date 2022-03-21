import {Stage} from 'egak.js';
import {Mixer} from 'naras.js';
import { TickingFunc } from '../ticker/ticker';

export default class Scene{
    children: Set<Scene> = new Set();
    parent: Scene | undefined;
    protected _stage: Stage = new Stage();
    get stage(): Stage{
        return this._stage;
    }
    protected _mixer: Mixer = new Mixer();
    get mixer(): Mixer{
        return this._mixer;
    }

    needsInfoNames: Set<string> = new Set();


    update: TickingFunc = (delta: number, info?: Object) =>{
        this.children.forEach((actor: Scene)=>{
            const info = {};
            actor.needsInfoNames.forEach((name: string)=>{
                info[name] = this[name];
            })
            actor.update(delta, info);
        })
    }

    needs(...name: string[]): this{
        for(let i=0, len=name.length;i<len;i++){
            this.needsInfoNames.add(name[i]);
        }
        return this;
    }
    unneeds(name: string): this{
        this.needsInfoNames.delete(name);
        return this;
    }

    addChild(scene: Scene): this{
        if(scene.parent == undefined){
            this._stage.addChild(scene._stage);
            this._mixer.addChild(scene._mixer);
            this.children.add(scene);
            scene.parent = this;
        }
        return this;
    }
    addChildren(...scenes: Scene[]): this{
        for(let i=0, len=scenes.length;i<len;i++){
            this.addChild(scenes[i]);
        }
        return this;
    }
    removeChild(scene: Scene): this{
        this._stage.removeChild(scene._stage);
        this._mixer.removeChild(scene._mixer);
        this.children.delete(scene);
        scene.parent = undefined;
        return this;
    }

    emit(method: string, ...arg: any[]): void{
        if(this.parent && this.parent[method]){
            this.parent[method](...arg);
        }
    }
}