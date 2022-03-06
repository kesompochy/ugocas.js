import Scene from '../scene';
import {Sprite, Texture} from 'egak.js';

export default class Actor extends Scene{
    sprite: Sprite;
    constructor(texture?: Texture){
        super();
        this.sprite = new Sprite(texture);
        this.stage.addChild(this.sprite);
    }
}