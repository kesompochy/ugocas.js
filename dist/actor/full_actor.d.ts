import Actor from './actor';
import { Audio } from 'naras.js';
import { Sprite, Texture } from 'egak.js';
export default class FullActor extends Actor {
    private _sounds;
    readonly sprite: Sprite;
    constructor(texture: Texture, ...audioInfos: Array<[string, Audio]>);
    play(id?: string): void;
    stop(id?: string): void;
    restart(id?: string): void;
    pause(id?: string): void;
    addSound(id: string, audio: Audio): void;
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
//# sourceMappingURL=full_actor.d.ts.map