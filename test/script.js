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
        const actor = new UGOCAS.SpriteActor(UGOCAS.TextureLoader.get('image'));
        actor.x = 100;
        actor.position.set(100, 50);
        actor.sprite.anchor.x = 52;
        actor.sprite.anchor.y = 22;
        let v = 1;

        const soundActor = new UGOCAS.SoundActor(UGOCAS.AudioLoader.get('sound'));
        app.baseScene.addChild(soundActor);

        actor.act = (delta, info) => {
            actor.x += v;
            actor.scale.x = Math.sign(v);

            if(actor.x > 300) {
                v *= -1;
                soundActor.play('sound');
            }
            if(actor.x < 0){
                v*=-1;
            }

            //actor.sprite.rotation += Math.PI/30*delta;
        }
        app.baseScene.addChild(actor);

        app.start();
    };

    app.addImage('image', './images/image.png', 'NEAREST');
    app.addSound('sound', './sounds/sound1.wav');
    app.loadThen(setup);
    app.loadAll();
    
}

window.onload = main;
