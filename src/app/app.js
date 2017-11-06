import Playground from './playground/playground.component.js';
import Game from './game/game.component.js';

require('../scss/main.scss');

const game = customElements.get('game-tag')
console.log(new game());
// document.body.appendChild(new game())
// game.initGame();