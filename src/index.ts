import App from './app';
import Scene from './scene';
import {Actor, SpriteActor, SoundActor} from './actor';

import * as EGAK from 'egak.js';
import * as NARAS from 'naras.js';

let Sprite = EGAK.Sprite,
        Stage = EGAK.Stage,
        Text = EGAK.Text,
        TextureLoader = EGAK.Loader;

let Sound = NARAS.Sound,
        Mixer = NARAS.Mixer,
        AudioLoader = NARAS.Loader;

export {App, Scene, Actor, SpriteActor, SoundActor,
        Sound, Mixer, AudioLoader,
        Sprite, Stage, Text, TextureLoader};