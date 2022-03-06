import Scene from '../scene';

export default class Actor extends Scene{
    constructor(){
        super();
    }

    update(delta: number, givenInfo?: Object): void{
        this.act(delta, givenInfo);

        this.children.forEach((actor: Scene)=>{
            const info = {};
            actor.needsInfoNames.forEach((name: string)=>{
                info[name] = this[name];
            })
            actor.update(delta, info);
        })
    }

    act(delta: number, info?: Object): void{

    }

}