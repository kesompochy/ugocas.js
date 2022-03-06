import Scene from '../scene';
import {Sprite, Texture} from 'egak.js';

import { TickingFunc } from '../ticker/ticker';

export default class Actor extends Scene{
    sprite: Sprite;
    private _actions: Set<TickingFunc> = new Set();
    constructor(texture?: Texture){
        super();
        this.sprite = new Sprite(texture);
        this.stage.addChild(this.sprite);
    }

    update(delta: number, givenInfo?: Object): void{
        this.act(delta, givenInfo);

        this.children.forEach((actor: Scene)=>{
            const info = {};
            actor.needsInfoNames.forEach((name: string)=>{
                info[name] = this[name];
            })
            actor.update(delta, info);
        })
    }

    act(delta: number, info?: Object): void{
        this._actions.forEach((action)=>{
            action(delta, info);
        })
    }
}