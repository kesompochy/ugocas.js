import {Stage} from 'egak.js';
import {Mixer} from 'naras.js';

export default class Scene{
    children: Set<Scene> = new Set();
    stage: Stage = new Stage();
    mixer: Mixer = new Mixer();

    needsInfoNames: Set<string> = new Set();

    constructor(){

    }

    act(delta: number, info?: Object): void{
    }

    update(delta: number, info?: Object): void{
        this.act(delta, info);

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
        this.stage.addChild(scene.stage);
        this.mixer.addChild(scene.mixer);
        this.children.add(scene);
        return this;
    }
    removeChild(scene: Scene): this{
        this.stage.removeChild(scene.stage);
        this.mixer.removeChild(scene.mixer);
        this.children.delete(scene);
        return this;
    }

    addSprite(sprite: Stage): this{
        this.stage.addChild(sprite);
        return this;
    }
    addSound(sound: Mixer): this{
        this.mixer.addChild(sound);
        return this;
    }
}