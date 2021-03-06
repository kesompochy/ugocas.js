//import * as UGOCAS from 'ugocas.js';
const main = () => {
    const canvas = document.getElementById('canvas');
    //canvas.style.width = '800px';
    //canvas.style.height = '1600px';
    const app = new UGOCAS.App({
        width: 400,
        height: 800,
        canvas: canvas,
        autoStyleCanvas: true
    });
    app.backgroundColor = {r: 255, g: 2, b: 100, a: 0.5};


    const setup = () => {


        const fullActor = new UGOCAS.FullActor(UGOCAS.TextureLoader.get('image'), ['sound', UGOCAS.AudioLoader.get('sound')]);
        fullActor.x = 100;
        fullActor.position.set(100, 50);
        fullActor.anchor.x = 52;
        fullActor.anchor.y = 22;
        let v = 1;
        app.baseScene.addChild(fullActor);

        const graphics = new UGOCAS.Graphics.Circle(
            0, 0, 100, 0, 0, 100, 1, 0, Math.PI*2
        );
        app.baseScene.stage.addChild(graphics);

        app.baseScene.emitTest = (hoge, foo) => {
            console.log(hoge, foo);
        }

        fullActor.act = () => {
            fullActor.x += v;
            fullActor.scale.x = Math.sign(v);

            if(fullActor.x > 100) {
                v *= -1;
                fullActor.play();
            }
            if(fullActor.x < 0){
                v*=-1;
            }

            fullActor.emit('emitTest', 0, 'a');
            //actor.sprite.rotation += Math.PI/30*delta;
        }

        app.start();
    };

    app.addImage('image', './images/image.png', 'NEAREST');
    app.addSound('sound', './sounds/sound1.wav');
    app.loadThen(setup);
    app.loadAll();
    
}

window.onload = main;
