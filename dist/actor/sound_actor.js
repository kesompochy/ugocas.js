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
var naras_js_1 = require("naras.js");
var SoundActor = /** @class */ (function (_super) {
    __extends(SoundActor, _super);
    function SoundActor(audio) {
        var _this = _super.call(this) || this;
        _this._sound = new naras_js_1.Sound(audio);
        _this._mixer.addChild(_this._sound);
        return _this;
    }
    SoundActor.prototype.play = function () {
        this.mixer.play();
    };
    return SoundActor;
}(actor_1.default));
exports.default = SoundActor;
//# sourceMappingURL=sound_actor.js.map