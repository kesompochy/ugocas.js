import {Stage} from 'egak.js';
import {Mixer} from 'naras.js';

export default class Scene{
    children: Set<Scene> = new Set();
    protected _stage: Stage = new Stage();
    get stage(): Stage{
        return this._stage;
    }
    mixer: Mixer = new Mixer();

    needsInfoNames: Set<string> = new Set();


    update(delta: number, givenInfo?: Object): void{
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
        this._stage.addChild(scene._stage);
        this.mixer.addChild(scene.mixer);
        this.children.add(scene);
        return this;
    }
    removeChild(scene: Scene): this{
        this._stage.removeChild(scene._stage);
        this.mixer.removeChild(scene.mixer);
        this.children.delete(scene);
        return this;
    }

    addSprite(sprite: Stage): this{
        this._stage.addChild(sprite);
        return this;
    }
    addSound(sound: Mixer): this{
        this.mixer.addChild(sound);
        return this;
    }
}