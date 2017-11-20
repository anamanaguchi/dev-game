import Playground from './playground/playground.component.js';
import Game from './game/game.component.js';

require('../scss/main.scss');

const game =  new Game();

document.body.appendChild(game)
game.initGame();