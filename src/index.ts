import App from './app';
import Scene from './scene';
import {Actor, SpriteActor} from './actor';

import * as EGAK from 'egak.js';
import * as NARAS from 'naras.js';

let Sprite = EGAK.Sprite,
        Stage = EGAK.Stage,
        Text = EGAK.Text,
        TextureLoader = EGAK.Loader;

let Sound = NARAS.Sound,
        Mixer = NARAS.Mixer,
        SoundLoader = NARAS.Loader;

export {App, Scene, Actor, SpriteActor,
        Sound, Mixer, SoundLoader,
        Sprite, Stage, Text, TextureLoader};