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
        this.round = 0;
        this.score = new Score();
        this.shooter = new Shooter();
        this.activeEnemy = 0;
        this.enemies = [];
        this.success = false;
        this.lostShots = 0;
    }


    setGameInterval() {
        return setInterval(() => {
            if (!this.enemies[this.activeEnemy]) {
                this.nextRound();
            }
            this.enemies[this.activeEnemy].show();
            setTimeout(() => {
                !this.success && this.lostShots++;
                this.enemies[this.activeEnemy].remove();
                this.lostShots > 3 && this.gameOver();
                this.activeEnemy++;
                this.success = false;
            }, 1000 - this.round * 100);
        }, 2000 - this.round * 2 * 100)
    }

    createEnemies(number) {
        for (let i = 0; i < number; i++) {
            this.enemies.push(new Enemy());
        }
    }

    nextRound() {
        this.round++;
        clearInterval(this.gameInterval);
        this.enemies = [];
        this.activeEnemy = 0;
        this.createEnemies(5);
        this.playground.appendElements(this.enemies);
        this.gameInterval = this.setGameInterval(this.round);
    }


    gameOver(){
        const gameOverDialog = confirm('Game over! Your score: '+ this.score.scoreValue +' Wanna play again?');
        if(gameOverDialog){
            this.round = 0;
            this.lostShots = 0;
            this.score.resetScore();
            this.nextRound();
        }else{
            window.location = 'http://google.com';
        }
    }

    initGame() {
        this.nextRound();
        this.appendElement(this.playground)
            .appendElement(this.shooter)
            .appendElement(this.score)
            .attachEvent('click', (event) => {
                if(this.shooter.shoot(event)){
                    this.success = true;
                    this.score.addScore();
                }else{
                    this.success = false;
                }
            })

    }
}

customElements.define('game-tag', Game);

export default customElements.get('game-tag');
