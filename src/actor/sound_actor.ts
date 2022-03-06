import Actor from './actor';

import {Sound, Audio} from 'naras.js';

export default class SoundActor extends Actor{
    _sound: Sound;
    constructor(audio: Audio){
        super();

        this._sound = new Sound(audio);
        this._mixer.addChild(this._sound);
    }

    play(){
        this.mixer.play();
    }
}