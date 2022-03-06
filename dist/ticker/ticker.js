"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MILLI = 1000;
var Ticker = /** @class */ (function () {
    function Ticker() {
        var _this = this;
        this._FPS = 60;
        this._ecpectedElapsedTime = MILLI / this._FPS;
        this.permittedDelay = 2;
        this._tickFunctions = new Set();
        this._prevTimeStamp = 0;
        this._mainloop = function (timeStamp) {
            var delta = _this._calcDelta(timeStamp);
            var ticks = _this._tickFunctions;
            ticks.forEach(function (func) {
                func(delta);
            });
            _this._animationRequest = requestAnimationFrame(_this._mainloop.bind(_this));
        };
    }
    Ticker.prototype._calcDelta = function (timeStamp) {
        var elapsedTime = timeStamp - this._prevTimeStamp;
        this._prevTimeStamp = timeStamp;
        var delta = Math.min(elapsedTime / this._ecpectedElapsedTime, this.permittedDelay);
        return delta;
    };
    Ticker.prototype.start = function () {
        this._animationRequest = requestAnimationFrame(this._mainloop);
    };
    Ticker.prototype.stop = function () {
        if (this._animationRequest)
            cancelAnimationFrame(this._animationRequest);
    };
    Ticker.prototype.add = function (func) {
        this._tickFunctions.add(func);
        return this;
    };
    Ticker.prototype.remove = function (func) {
        this._tickFunctions.delete(func);
    };
    Object.defineProperty(Ticker.prototype, "FPS", {
        get: function () {
            return this._FPS;
        },
        set: function (value) {
            this._FPS = value;
            this._ecpectedElapsedTime = MILLI / this._FPS;
        },
        enumerable: false,
        configurable: true
    });
    return Ticker;
}());
exports.default = Ticker;
//# sourceMappingURL=ticker.js.map