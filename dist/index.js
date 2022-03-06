"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextureLoader = exports.Text = exports.Stage = exports.Sprite = exports.AudioLoader = exports.Mixer = exports.Sound = exports.SoundActor = exports.SpriteActor = exports.Actor = exports.Scene = exports.App = void 0;
var app_1 = __importDefault(require("./app"));
exports.App = app_1.default;
var scene_1 = __importDefault(require("./scene"));
exports.Scene = scene_1.default;
var actor_1 = require("./actor");
Object.defineProperty(exports, "Actor", { enumerable: true, get: function () { return actor_1.Actor; } });
Object.defineProperty(exports, "SpriteActor", { enumerable: true, get: function () { return actor_1.SpriteActor; } });
Object.defineProperty(exports, "SoundActor", { enumerable: true, get: function () { return actor_1.SoundActor; } });
var EGAK = __importStar(require("egak.js"));
var NARAS = __importStar(require("naras.js"));
var Sprite = EGAK.Sprite, Stage = EGAK.Stage, Text = EGAK.Text, TextureLoader = EGAK.Loader;
exports.Sprite = Sprite;
exports.Stage = Stage;
exports.Text = Text;
exports.TextureLoader = TextureLoader;
var Sound = NARAS.Sound, Mixer = NARAS.Mixer, AudioLoader = NARAS.Loader;
exports.Sound = Sound;
exports.Mixer = Mixer;
exports.AudioLoader = AudioLoader;
//# sourceMappingURL=index.js.map