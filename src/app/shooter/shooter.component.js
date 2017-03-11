import DomManager from '../shared/dom-manager.service';

export default class Shooter {
    constructor() {
        this.domManager = new DomManager();
        this.shooterNode = this.domManager
            .createElement('div')
            .attachEvent('click', () => this.shoot())
            .addClass('shooter');
    }

    shoot() {
        this.shooterNode.addClass('active')
        setTimeout(()=>this.shooterNode.removeClass('active'), 200);
    }


}