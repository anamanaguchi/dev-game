export default class Playground {
    constructor() {
        this.container = document.createElement('div');
        this.scoreWrapper = document.createElement('span');

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