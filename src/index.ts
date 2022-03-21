import App from './app';
import Scene from './scene';
import {Actor, SpriteActor, SoundActor, FullActor} from './actor';

import * as EGAK from 'egak.js';
import * as NARAS from 'naras.js';

let Sprite = EGAK.Sprite,
        Stage = EGAK.Stage,
        Text = EGAK.Text,
        Graphics = EGAK.Graphics,
        Texture = EGAK.Texture,
        TextureLoader = EGAK.Loader;

let Sound = NARAS.Sound,
        Mixer = NARAS.Mixer,
        AudioLoader = NARAS.Loader,
        Audio = NARAS.Audio,
        Processer = NARAS.Processer;

export {App, Scene, Actor, SpriteActor, SoundActor, FullActor,
        Sound, Mixer, AudioLoader, Audio, Processer,
        Sprite, Stage, Text, Graphics, Texture, TextureLoader};