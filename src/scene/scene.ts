import {Stage} from 'egak.js';
import {Mixer} from 'naras.js';

export default class Scene{
    children: Set<Scene> = new Set();
    stage: Stage = new Stage();
    mixer: Mixer = new Mixer();

    needsInfoNames: Set<string> = new Set();


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

    needs(name: string){
        this.needsInfoNames.add(name);
    }

    addChild(scene: Scene): this{
        this.stage.addChild(scene.stage);
        this.mixer.addChild(scene.mixer);
        this.children.add(scene);
        return this;
    }
}