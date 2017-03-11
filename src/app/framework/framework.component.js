import DomManager from '../shared/dom-manager.service';

export default class Framework {
    constructor() {
        this.domManager = new DomManager();
    }

   randomBetween(min, max) {
        if (min < 0) {
            return min + Math.random() * (Math.abs(min)+max);
        }else {
            return min + Math.random() * max;
        }
    }

    createFramework() {
        let leftPosition = this.randomBetween(50, window.innerWidth - 200) + 'px';
        let bottomPosition = this.randomBetween(170, window.innerHeight - 320) + 'px';
        let framework = this.domManager
            .createElement('span')
            .addClass('framework')
            .css('left', leftPosition)
            .css('bottom', bottomPosition);

        return framework;
    }

}