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
var scene_1 = __importDefault(require("../scene"));
var Actor = /** @class */ (function (_super) {
    __extends(Actor, _super);
    function Actor() {
        return _super.call(this) || this;
    }
    Actor.prototype.update = function (delta, givenInfo) {
        var _this = this;
        this.act(delta, givenInfo);
        this.children.forEach(function (actor) {
            var info = {};
            actor.needsInfoNames.forEach(function (name) {
                info[name] = _this[name];
            });
            actor.update(delta, info);
        });
    };
    Actor.prototype.act = function (delta, info) {
    };
    return Actor;
}(scene_1.default));
exports.default = Actor;
//# sourceMappingURL=actor.js.map