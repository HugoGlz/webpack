import '../css/estilos.css'
import platziLogo from '../css/images/platzi.png'
import {firstMessage, delayedMessage} from './message.js';

console.log('hello world from webpack');
document.write(firstMessage);

delayedMessage();


const img = document.createElement('img');
img.setAttribute('src', platziLogo);
img.setAttribute('width', 50);
img.setAttribute('height', 50);

document.body.append(img);