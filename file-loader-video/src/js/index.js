import '../css/estilos.css'
import platziLogo from '../css/images/platzi.png'
import {firstMessage, delayedMessage} from './message.js';

import video1 from '../video/que-es-core.mp4';
import video2 from '../video/que-es-core.webm';

console.log('hello world from webpack');
document.write(firstMessage);

delayedMessage();


const img = document.createElement('img');
img.setAttribute('src', platziLogo);
img.setAttribute('width', 50);
img.setAttribute('height', 50);

const videoElement1 = document.createElement('video');
videoElement1.setAttribute('src', video1);
videoElement1.setAttribute('width', 480);
videoElement1.setAttribute('autoplay', true);
videoElement1.setAttribute('controls', true);

const videoElement2 = document.createElement('video');
videoElement2.setAttribute('src', video2);
videoElement2.setAttribute('width', 480);
videoElement2.setAttribute('autoplay', true);
videoElement2.setAttribute('controls', true);

document.body.append(img);
document.body.append(videoElement1);
document.body.append(videoElement2);