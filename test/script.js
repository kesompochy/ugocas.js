//import * as UGOCAS from 'ugocas.js';
const main = () => {
    const canvas = document.getElementById('canvas');
    canvas.style.width = '800px';
    canvas.style.height = '1600px';
    const app = new UGOCAS.App({
        width: 400,
        height: 800,
        canvas: canvas,
    });


    const setup = () => {
        const actor = new UGOCAS.Actor(UGOCAS.TextureLoader.get('image'));
        //actor.sprite.x = 100;
        actor.sprite.y = 100;
        //actor.sprite.anchor.x = 50;
        //actor.sprite.anchor.y = 20;
        let v = 1;
        actor.act = (delta, info) => {
            actor.sprite.x += v;
            actor.sprite.scale.x = Math.sign(v);

            if(actor.sprite.x > 300) v *= -1;
            if(actor.sprite.x < 0) v*=-1;

            //actor.sprite.rotation += Math.PI/30*delta;
        }
        app.baseScene.addChild(actor);

        app.start();
    };

    app.addImage('image', './images/image.png', 'NEAREST');
    app.loadThen(setup);
    app.loadAll();
    
}

window.onload = main;
