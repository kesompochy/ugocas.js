import App from './app';
import Scene from './scene';
import {Actor, SpriteActor, SoundActor, FullActor} from './actor';

import * as EGAK from 'egak.js';
import * as NARAS from 'naras.js';

let Sprite = EGAK.Sprite,
        Stage = EGAK.Stage,
        Text = EGAK.Text,
        Graphics = EGAK.Graphics,
        TextureLoader = EGAK.Loader;

let Sound = NARAS.Sound,
        Mixer = NARAS.Mixer,
        AudioLoader = NARAS.Loader;

export {App, Scene, Actor, SpriteActor, SoundActor, FullActor,
        Sound, Mixer, AudioLoader,
        Sprite, Stage, Text, Graphics, TextureLoader};