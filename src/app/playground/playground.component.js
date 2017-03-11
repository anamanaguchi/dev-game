import DomManager from '../shared/dom-manager.service';

export default class Playground {
    constructor() {
        this.domManager = new DomManager();
        this.container = this.domManager.createElement('div');
        this.scoreWrapper = this.domManager.createElement('span');
        this.containerBg = this.domManager.createElement('img').addClass('bg').addAttribute('src', '/assets/bg.jpg');
    }

    get area() {
        return this.drawArea();
    }

    drawArea() {
        this.container
            .addClass('playground')
            .attachEvent('mousemove', ()=>this.moveBackground())
            .appendElement(this.drawScore(0))
            .appendElement(this.containerBg);
        return this.container;
    }

    drawScore(score) {
        this.scoreWrapper.innerHTML = score;
        this.scoreWrapper.classList.add('score');
        return this.scoreWrapper;
    }

    moveBackground() {
        if (window.event) {
            event = window.event;
        }
        var mousex = event.clientX;
        var mousey = event.clientY;
        this.containerBg.style.webkitTransform =
            'scale(1) translate3d(' + -mousex /2 + 'px,' + -mousey / .8 + 'px,' + 0 + 'px)';


    }

}