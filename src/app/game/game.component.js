import DomManager from '../shared/dom-manager.service';
import Shooter from '../shooter/shooter.component';
import Framework from '../framework/framework.component';

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
        console.log('SCORE: ' + this._score);
    }

    startGame() {
        let shooter = new Shooter();
        let framework = new Framework();
        this.playground.area
            .appendElement(shooter.shooterNode)
            .appendToDom(this.playground.area)
            .attachEvent('click', () => {
                this.score = shooter.shoot(event) ? ++this.score : this.score;
            })
            .appendElements(framework.frameworks);
        //setInterval(_=> {
        //    framework.showFramework();
        //},1100);
    }
}