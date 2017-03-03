import DomManager from '../shared/dom-manager.service';
import Shooter from '../shooter/shooter.component';

export default class Game {

    constructor(playground) {
        this.playground = playground;
        this._score = 0;
        this.domManager = new DomManager();
    }

    get score() {
        return this._score;
    }

    set score(scoreValue) {
        this.playground.drawScore(scoreValue);
        this._score = scoreValue;
    }

    startGame() {
        let shooter = new Shooter();
        this.playground.area
            .appendElement(shooter.shooterNode)
            .appendToDom(this.playground.area);
    }
}