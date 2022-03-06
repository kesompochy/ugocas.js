//import * as UGOCAS from 'ugocas.js';
const main = () => {
    const canvas = document.getElementById('canvas');
    canvas.style.width = '450px';
    canvas.style.height = '600px';
    const app = new UGOCAS.App({
        width: 300,
        height: 400,
        canvas: canvas,
    });


    const setup = () => {
        const actor = new UGOCAS.Actor(UGOCAS.TextureLoader.get('image'));
        app.baseScene.addChild(actor);

        app.start();
    };

    app.addImage('image', './images/image.png');
    app.loadThen(setup);
    app.loadAll();
    
}

window.onload = main;
