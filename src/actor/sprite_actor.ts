import Actor from './actor';

import {Sprite, Texture} from 'egak.js';



export default class SpriteActor extends Actor{
    readonly sprite: Sprite;

    constructor(texture: Texture){
        super();

        //SpriteActorはstageを持たず、spriteだけを持つ。
        this.sprite = new Sprite(texture);
        this._stage = this.sprite;
    }

    get position() {
        return this.sprite.position;
    }
    set x(value: number){
        this.sprite.x = value;
    }
    set y(value: number){
        this.sprite.y = value;
    }
    get x(): number{
        return this.sprite.x
    }
    get y(): number{
        return this.sprite.y;
    }

    private _rotation: number = 0;
    set rotation(value: number){
        this._rotation = value;
        this.sprite.rotation = value;
    }
    get rotation(): number{
        return this._rotation;
    }

    get scale(){
        return this.sprite.scale;
    }

    get anchor(){
        return this.sprite.anchor;
    }
}