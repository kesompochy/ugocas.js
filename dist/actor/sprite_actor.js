"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var actor_1 = __importDefault(require("./actor"));
var egak_js_1 = require("egak.js");
var SpriteActor = /** @class */ (function (_super) {
    __extends(SpriteActor, _super);
    function SpriteActor(texture) {
        var _this = _super.call(this) || this;
        _this._rotation = 0;
        //SpriteActorはstageを持たず、spriteだけを持つ。
        _this.sprite = new egak_js_1.Sprite(texture);
        _this._stage = _this.sprite;
        return _this;
    }
    Object.defineProperty(SpriteActor.prototype, "position", {
        get: function () {
            return this.sprite.position;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpriteActor.prototype, "x", {
        get: function () {
            return this.sprite.x;
        },
        set: function (value) {
            this.sprite.x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpriteActor.prototype, "y", {
        get: function () {
            return this.sprite.y;
        },
        set: function (value) {
            this.sprite.y = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpriteActor.prototype, "rotation", {
        get: function () {
            return this._rotation;
        },
        set: function (value) {
            this._rotation = value;
            this.sprite.rotation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpriteActor.prototype, "scale", {
        get: function () {
            return this.sprite.scale;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpriteActor.prototype, "anchor", {
        get: function () {
            return this.sprite.anchor;
        },
        enumerable: false,
        configurable: true
    });
    return SpriteActor;
}(actor_1.default));
exports.default = SpriteActor;
//# sourceMappingURL=sprite_actor.js.map