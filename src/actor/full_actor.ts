import Actor from './actor';

import {Sound, Audio} from 'naras.js';
import {Sprite, Texture} from 'egak.js';

export default class FullActor extends Actor{
    private _sounds: Map<string, Sound> = new Map();
    readonly sprite: Sprite;

    constructor(texture: Texture, ...audioInfos: Array<[string, Audio]>){
        super();

        this.sprite = new Sprite(texture);
        this._stage = this.sprite;

        audioInfos.forEach((info)=>{
            this.addSound(info[0], info[1]);
        });
    }

    play(id?: string): void{
        if(id){
            this._sounds.get(id).play();
        } else {
            this.mixer.play();
        }
    }
    stop(id?: string): void{
        if(id){
            this._sounds.get(id).stop();
        } else {
            this.mixer.stop();
        }
    }
    restart(id?: string): void{
        if(id){
            this._sounds.get(id).restart();
        } else {
            this.mixer.restart();
        }
    }
    pause(id?: string): void{
        if(id){
            this._sounds.get(id).pause();
        } else {
            this.mixer.pause();
        }
    }
    addSound(id: string, audio: Audio): void{
        const sound = new Sound(audio);
        this.mixer.addChild(sound);
        this._sounds.set(id, sound);
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