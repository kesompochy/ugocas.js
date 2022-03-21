import Actor from './actor';
import { Sprite, Texture } from 'egak.js';
export default class SpriteActor extends Actor {
    readonly sprite: Sprite;
    constructor(texture: Texture | undefined);
    get position(): import("egak.js/dist/display/abstract_display_object").TwoDemensionParam;
    set x(value: number);
    set y(value: number);
    get x(): number;
    get y(): number;
    private _rotation;
    set rotation(value: number);
    get rotation(): number;
    get scale(): import("egak.js/dist/display/abstract_display_object").TwoDemensionParam;
    get anchor(): import("egak.js/dist/display/stage").Anchor;
}
//# sourceMappingURL=sprite_actor.d.ts.map