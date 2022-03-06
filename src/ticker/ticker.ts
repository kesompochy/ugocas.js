const MILLI = 1000;

type TickingFunc = (delta: number, info?: Object)=>void;

export default class Ticker {
    private _FPS: number = 60;
    private _ecpectedElapsedTime = MILLI/this._FPS;
    permittedDelay: number = 2;

    private _tickFunctions: Set<TickingFunc> = new Set();
    private _prevTimeStamp: number = 0;

    private _animationRequest: number| undefined;

    private _mainloop: (timeStamp: number)=>void = 
    (timeStamp: number)=>{
        const delta = this._calcDelta(timeStamp);

        const ticks = this._tickFunctions;
        ticks.forEach((func)=>{
            func(delta);
        })

        this._animationRequest = requestAnimationFrame(this._mainloop.bind(this));
    };

    private _calcDelta(timeStamp: number): number{
        const elapsedTime = this._prevTimeStamp - timeStamp;
        this._prevTimeStamp = timeStamp;
        const delta = Math.min(elapsedTime/this._ecpectedElapsedTime, this.permittedDelay);
        return delta;
    }

    start(): void{
        this._animationRequest = requestAnimationFrame(this._mainloop);
    }
    stop(): void{
        if(this._animationRequest) cancelAnimationFrame(this._animationRequest);
    }

    add(func: TickingFunc): this{
        this._tickFunctions.add(func);
        return this;
    }
    remove(func: TickingFunc): void{
        this._tickFunctions.delete(func);
    }

    set FPS(value: number){
        this._FPS = value;
        this._ecpectedElapsedTime = MILLI/this._FPS;
    }
    get FPS(): number{
        return this._FPS;
    }
}