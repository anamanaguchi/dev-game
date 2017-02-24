import Playground from './playground/playground.component.js';
import Game from './game/game.component.js';

require('../scss/main.scss');

let playground = new Playground();
let game = new Game(playground);

game.startGame();