import Scene from '../scene';
import { TickingFunc } from '../ticker/ticker';


export default class Actor extends Scene{
    sprite: Sprite;
    constructor(texture?: Texture){
        super();
        this.sprite = new Sprite(texture);
        this.stage.addChild(this.sprite);
    }

    update: TickingFunc = (delta?: number, givenInfo?: Object)=>{
        this.act(delta, givenInfo);

        this.children.forEach((actor: Scene)=>{
            const info = {};
            actor.needsInfoNames.forEach((name: string)=>{
                info[name] = this[name];
            })
            actor.update(delta, info);
        })
    }

    act: TickingFunc = (delta?: number, info?: Object) => {

    }

}