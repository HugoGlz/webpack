import renderToDOM from './render-to-dom.js';
import makeMessage from './make-message.js';

const waitTime = new Promise((todoOk, todoMal) => {
	setTimeout( () => {
		todoOk('Mensaje restardado por 3 segs');
	}, 3000)
})

module.exports = {
	firstMessage: 'Hola Mundo desde un modulo',
	delayedMessage: async () => {
		const message = await waitTime;
		console.log(message);
		
		const element = makeMessage(message);
		renderToDOM(element);
	}
}