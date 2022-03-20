import Actor from './actor';
import { Sprite, Texture } from 'egak.js';
export default class SpriteActor extends Actor {
    readonly sprite: Sprite;
    constructor(texture: Texture);
    get position(): any;
    set x(value: number);
    set y(value: number);
    get x(): number;
    get y(): number;
    private _rotation;
    set rotation(value: number);
    get rotation(): number;
    get scale(): any;
    get anchor(): any;
}
//# sourceMappingURL=sprite_actor.d.ts.map