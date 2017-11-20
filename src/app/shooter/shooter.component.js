import DomManager from '../shared/dom-manager.service';
import CustomHtmlElement from "../shared/customHtmlElement";

class Shooter extends CustomHtmlElement {
    constructor() {
        super();
        this.attachEvent('click', (event) => this.shoot(event))
            .addClass('shooter');
    }

    animateShooter() {
        this.addClass('active');
        setTimeout(() => this.removeClass('active'), 200);
    }

    shoot(event) {
        let goodShot = false;
        this.animateShooter();
        if (event.target.classList.contains('enemy')) {
            event.target.classList.add('remove-action');
            setTimeout(() => event.target.css('display', 'none'), 100);
            goodShot = true;
        }

        return goodShot;
    }
}
customElements.define('shooter-tag', Shooter);
export default customElements.get('shooter-tag');