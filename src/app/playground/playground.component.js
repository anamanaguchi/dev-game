import DomManager from '../shared/dom-manager.service';

export default class Playground {
    constructor() {
        this.domManager = new DomManager();
        this.container = this.domManager.createElement('div');
        this.scoreWrapper = this.domManager.createElement('span');
        this.containerBg = this.domManager.createElement('div').addClass('bg');
        this.mouseMoveProperties = {
            lFollowX:0,
            lFollowY:0,
            x:0,
            y:0,
            friction:0.2
        }
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
        const event = window.event;
        const lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - event.clientX));
        const lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - event.clientY));

        this.mouseMoveProperties.lFollowX = (20 * lMouseX) / 100;
        this.mouseMoveProperties.lFollowY = (10 * lMouseY) / 100;
        
        this.mouseMoveProperties.x += (this.mouseMoveProperties.lFollowX - this.mouseMoveProperties.x) * this.mouseMoveProperties.friction;
        this.mouseMoveProperties.y += (this.mouseMoveProperties.lFollowY - this.mouseMoveProperties.y) * this.mouseMoveProperties.friction;
        
        this.containerBg.style.transform = 'translate(' + this.mouseMoveProperties.x + 'px, ' + this.mouseMoveProperties.y + 'px) scale(1.1)';
        this.containerBg.style.webkitTransform = 'translate(' + this.mouseMoveProperties.x + 'px, ' + this.mouseMoveProperties.y + 'px) scale(1.1)';
        this.containerBg.style.mozTransform = 'translate(' + this.mouseMoveProperties.x + 'px, ' + this.mouseMoveProperties.y + 'px) scale(1.1)';
    
    }

}