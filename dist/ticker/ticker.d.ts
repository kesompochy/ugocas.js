export declare type TickingFunc = (delta: number, info?: Object) => void;
export default class Ticker {
    private _FPS;
    private _ecpectedElapsedTime;
    permittedDelay: number;
    private _tickFunctions;
    private _prevTimeStamp;
    private _animationRequest;
    private _mainloop;
    private _calcDelta;
    start(): void;
    stop(): void;
    add(func: TickingFunc): this;
    remove(func: TickingFunc): void;
    set FPS(value: number);
    get FPS(): number;
}
//# sourceMappingURL=ticker.d.ts.map