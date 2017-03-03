import DomManager from '../shared/dom-manager.service';

export default class Playground {
    constructor() {
        this.domManager = new DomManager();
        this.container = this.domManager.createElement('div');
        this.scoreWrapper = this.domManager.createElement('span');

    }

    get area() {
        return this.drawArea();
    }

    drawArea() {
        this.container.classList.add('playground');
        this.container.appendChild(this.drawScore(0));
        return this.container;
    }

    drawScore(score){
        this.scoreWrapper.innerHTML = score;
        this.scoreWrapper.classList.add('score');
        return this.scoreWrapper;
    }

}