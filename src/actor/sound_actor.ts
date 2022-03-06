import Actor from './actor';

import {Sound, Audio} from 'naras.js';


export default class SoundActor extends Actor{
    private _sounds: Map<string, Sound> = new Map();
    constructor(...audioInfos: Array<[string, Audio]>){
        super();
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
}