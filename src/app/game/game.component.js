import DomManager from '../shared/dom-manager.service';
import Shooter from '../shooter/shooter.component';
import Enemy from '../enemy/enemy.component';
import Playground from '../playground/playground.component';
import Score from '../score/score.component';
import CustomHtmlElement from "../shared/customHtmlElement";

class Game extends CustomHtmlElement {

    constructor() {
        super();
        this.addClass('game');
        this.playground = new Playground();
        this.score = new Score();
        this.shooter = new Shooter();
        this.activeEnemy = 0;
        this.enemies = [];
    }

    startGame() {
        setInterval(() => {
            this.enemies[this.activeEnemy].show();
            setTimeout(() => {
                this.enemies[this.activeEnemy].remove()
                this.activeEnemy++;
            }, 2000)
        }, 4000)
    }

    createEnemies(number) {
        for (let i = 0; i < number; i++) {
            this.enemies.push(new Enemy());
        }
    }

    initGame() {
        this.createEnemies(20);
        this.playground.appendElements(this.enemies);
        this.appendElement(this.playground)
            .appendElement(this.shooter)
            .appendElement(this.score)
            .attachEvent('click', (event) => {
                this.shooter.shoot(event) && this.score.addScore();
            })
        this.startGame();
    }
}

customElements.define('game-tag', Game);

export default customElements.get('game-tag');
