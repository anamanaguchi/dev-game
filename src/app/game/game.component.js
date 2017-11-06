
import DomManager from '../shared/dom-manager.service';
import Shooter from '../shooter/shooter.component';
import Enemy from '../enemy/enemy.component';
export default class Game {

    constructor(playground) {
        this.playground = playground;
        this.activeEnemy = 0;
        this._score = 0;
        this.domManager = new DomManager();
        this.enemies = [];
    }

    get score() {
        return this._score;
    }

    set score(scoreValue) {
        this.playground.drawScore(scoreValue);
        this._score = scoreValue;
        console.log('SCORE: ' + this._score);
    }

    createEnemies(number){
        for(let i=0; i<number; i++){
            this.enemies.push(new Enemy());
        }
    }

    startGame() {
        let shooter = new Shooter();
        this.createEnemies(20);
        this.playground.area
            .appendElement(shooter.shooterNode)
            .appendToDom(this.playground.area)
            .attachEvent('click', () => {
                this.score = shooter.shoot(event) ? ++this.score : this.score;
            }).appendElements(this.enemies);
        setInterval(()=>{
            this.enemies[this.activeEnemy].show();
            setTimeout(()=>{
                this.enemies[this.activeEnemy].remove()
                this.activeEnemy++;
            },2000)
        },4000)
    }
}