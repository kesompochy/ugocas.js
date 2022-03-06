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
var EGAK = __importStar(require("egak.js"));
var NARAS = __importStar(require("naras.js"));
var ticker_1 = __importDefault(require("../ticker"));
var scene_1 = __importDefault(require("../scene"));
var defaultAppOptions = {
    width: 300,
    height: 400,
    autoStart: false,
    canvas: document.createElement('canvas'),
    autoStyleCanvas: false,
};
var App = /** @class */ (function () {
    function App(options) {
        var _this = this;
        this.ticker = new ticker_1.default();
        this._width = 0;
        this._height = 0;
        this._loadThen = function () { };
        this.mainLoop = function (delta, info) {
            _this.renderSystem.clearScreen(0, 0, 0, 1);
            _this.baseScene.update(delta, info);
            _this.renderSystem.render();
        };
        options = Object.assign(defaultAppOptions, options);
        this._width = options.width;
        this._height = options.height;
        this.renderSystem = new EGAK.App({
            width: this._width,
            height: this._height,
            canvas: options.canvas
        });
        this.soundSystem = new NARAS.App();
        this.baseScene = new scene_1.default();
        this.renderSystem.baseStage.addChild(this.baseScene.stage);
        this.soundSystem.baseMixer.addChild(this.baseScene.mixer);
        this.renderSystem.loader.loadThen(function () {
            if (_this.soundSystem.loaded) {
                _this._loadThen();
            }
        });
        this.soundSystem.loader.loadThen(function () {
            if (_this.renderSystem.loaded) {
                _this._loadThen();
            }
        });
        this.ticker.add(this.mainLoop.bind(this));
        if (options.autoStart) {
            this.ticker.start();
        }
    }
    App.prototype.start = function () {
        this.ticker.start();
    };
    App.prototype.addImage = function (id, src, scaleMode) {
        this.renderSystem.addResource(id, src, scaleMode);
        return this;
    };
    App.prototype.addSound = function (id, src, scaleMode) {
        this.soundSystem.addResource(id, src, scaleMode);
        return this;
    };
    App.prototype.loadAll = function () {
        this.renderSystem.loadAll();
        this.soundSystem.loadAll();
    };
    App.prototype.getTexture = function (id) {
        return this.renderSystem.loader.get(id);
    };
    App.prototype.getAudio = function (id) {
        return this.soundSystem.loader.get(id);
    };
    App.prototype.loadThen = function (func) {
        this._loadThen = func;
    };
    return App;
}());
exports.default = App;
//# sourceMappingURL=app.js.map