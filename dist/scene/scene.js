"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var egak_js_1 = require("egak.js");
var naras_js_1 = require("naras.js");
var Scene = /** @class */ (function () {
    function Scene() {
        this.children = new Set();
        this._stage = new egak_js_1.Stage();
        this._mixer = new naras_js_1.Mixer();
        this.needsInfoNames = new Set();
    }
    Object.defineProperty(Scene.prototype, "stage", {
        get: function () {
            return this._stage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scene.prototype, "mixer", {
        get: function () {
            return this._mixer;
        },
        enumerable: false,
        configurable: true
    });
    Scene.prototype.update = function (delta, givenInfo) {
        var _this = this;
        this.children.forEach(function (actor) {
            var info = {};
            actor.needsInfoNames.forEach(function (name) {
                info[name] = _this[name];
            });
            actor.update(delta, info);
        });
    };
    Scene.prototype.needs = function () {
        var name = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            name[_i] = arguments[_i];
        }
        for (var i = 0, len = name.length; i < len; i++) {
            this.needsInfoNames.add(name[i]);
        }
        return this;
    };
    Scene.prototype.unneeds = function (name) {
        this.needsInfoNames.delete(name);
        return this;
    };
    Scene.prototype.addChild = function (scene) {
        this._stage.addChild(scene._stage);
        this._mixer.addChild(scene._mixer);
        this.children.add(scene);
        return this;
    };
    Scene.prototype.removeChild = function (scene) {
        this._stage.removeChild(scene._stage);
        this._mixer.removeChild(scene._mixer);
        this.children.delete(scene);
        return this;
    };
    return Scene;
}());
exports.default = Scene;
//# sourceMappingURL=scene.js.map