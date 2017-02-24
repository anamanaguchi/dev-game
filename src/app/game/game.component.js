import DomManager from '../shared/dom-manager.service';

export default class Game{

    constructor(playground){
        this.playground = playground;
        this._score = 0;
        this.domManager = new DomManager();
    }

    get score(){
        return this._score;
    }

    set score(scoreValue){
        this.playground.drawScore(scoreValue);
        this._score = scoreValue;
    }

    startGame(){
        let button = document.createElement('button');
        button.innerHTML = 'SCORE UP!';

        this.domManager.appendToDom(this.playground.area);
        this.domManager.attachEvent(button,"click", ()=>this.score += 10);
        this.domManager.appendToElement(this.playground.area,button);
    }
}