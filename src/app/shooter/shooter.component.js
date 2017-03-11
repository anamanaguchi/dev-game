import DomManager from '../shared/dom-manager.service';

export default class Shooter {
    constructor() {
        this.domManager = new DomManager();
        this.shooterNode = this.domManager
            .createElement('div')
            .attachEvent('click', () => this.shoot())
            .addClass('shooter');
    }

    animateShooter() {
        this.shooterNode.addClass('active');
        setTimeout(()=>this.shooterNode.removeClass('active'), 200);
    }

    shoot(event, score) {
        let goodShot = false;
        this.animateShooter();
        if (event.target.classList.contains('framework')) {
            event.target.classList.add('remove-action');
            setTimeout(()=>event.target.parentNode.removeChild(event.target), 500);
            goodShot = true;
        }

        return goodShot;
    }


}