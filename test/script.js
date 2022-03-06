//import * as EGAK from 'egak.js';
const main = () => {
    const canvas = document.getElementById('canvas');
    canvas.style.width = '450px';
    canvas.style.height = '600px';
    const app = new UGOCAS.App({
        width: 200,
        height: 400,
        canvas: canvas,
    });

    const setup = () => {
        console.log('setup');
    };


    app.loadThen(setup);
    app.loadAll();
    
}

window.onload = main;
