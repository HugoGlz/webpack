import '../css/estilos.css'
import platziLogo from '../css/images/platzi.png'
import {firstMessage, delayedMessage} from './message.js';
import renderToDOM from './render-to-dom.js';

import data from './teachers.json';

console.log(data);

console.log('hello world from webpack');
document.write(firstMessage);

delayedMessage();

const img = document.createElement('img');
img.setAttribute('src', platziLogo);
img.setAttribute('width', 50);
img.setAttribute('height', 50);

document.body.append(img);

data.teachers.forEach( (teacher) => {
	var li = document.createElement('li');
	li.textContent = teacher.name;
	
	renderToDOM(li);
})