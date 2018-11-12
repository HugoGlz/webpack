import '../css/estilos.css'
import platziLogo from '../css/images/platzi.png'
import {firstMessage, delayedMessage} from './message.js';
import data from './teachers.json';

import Teachers from './Teachers.js';

import React from 'react';
import { render } from 'react-dom';

render(<Teachers  data={data}/>, document.getElementById('container'));

console.log(data);

console.log('hello world from webpack');
document.write(firstMessage);

delayedMessage();

const img = document.createElement('img');
img.setAttribute('src', platziLogo);
img.setAttribute('width', 50);
img.setAttribute('height', 50);

document.body.append(img);