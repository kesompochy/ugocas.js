import Actor from './actor';
import { Audio } from 'naras.js';
export default class SoundActor extends Actor {
    private _sounds;
    constructor(...audioInfos: Array<[string, Audio]>);
    play(id?: string): void;
    stop(id?: string): void;
    restart(id?: string): void;
    pause(id?: string): void;
    addSound(id: string, audio: Audio): void;
}
//# sourceMappingURL=sound_actor.d.ts.map