import CustomHtmlElement from "../shared/customHtmlElement";

class Playground extends CustomHtmlElement {

    constructor() {
        super();
        this.mouseMoveProperties = {
            lFollowX: 0,
            lFollowY: 0,
            x: 0,
            y: 0,
            friction: 0.2
        };
        this.addClass('playground');
        this.attachEvent('mousemove', (event) => this.moveBackground(event));
    }

    moveBackground(event) {
        const lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - event.clientX));
        const lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - event.clientY));
        this.mouseMoveProperties.lFollowX = (20 * lMouseX) / 100;
        this.mouseMoveProperties.lFollowY = (10 * lMouseY) / 100;

        this.mouseMoveProperties.x += (this.mouseMoveProperties.lFollowX - this.mouseMoveProperties.x) * this.mouseMoveProperties.friction;
        this.mouseMoveProperties.y += (this.mouseMoveProperties.lFollowY - this.mouseMoveProperties.y) * this.mouseMoveProperties.friction;

        this.style.transform = 'translate(' + this.mouseMoveProperties.x + 'px, ' + this.mouseMoveProperties.y + 'px) scale(1.1)';
        this.style.webkitTransform = 'translate(' + this.mouseMoveProperties.x + 'px, ' + this.mouseMoveProperties.y + 'px) scale(1.1)';
        this.style.mozTransform = 'translate(' + this.mouseMoveProperties.x + 'px, ' + this.mouseMoveProperties.y + 'px) scale(1.1)';

    }

}

customElements.define('play-ground', Playground);

export default customElements.get('play-ground');
