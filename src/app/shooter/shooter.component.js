import DomManager from '../shared/dom-manager.service';

export default class Shooter {
    constructor() {
        this.domManager = new DomManager();
    }

    get shooterNode() {
        let shooterNode = this.domManager
            .createElement('button')
            .appendText('hello')
            .attachEvent('click', this.shoot);
        return shooterNode;
    }

    shoot() {
        alert('shoot!');
    }


}