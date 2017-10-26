import DomManager from '../shared/dom-manager.service';

export default class Framework {
    constructor() {
        this.domManager = new DomManager();
        this.activeFrameworkIndex = 0;
        this._frameworks = [];
        for(let i=0; i<100; i++){
            this._frameworks.push(this.domManager.createElement('span').addClass('framework'));
        }
    }

   randomBetween(min, max) {
        if (min < 0) {
            return min + Math.random() * (Math.abs(min)+max);
        }else {
            return min + Math.random() * max;
        }
    }

    get frameworks(){
        return this._frameworks;
    }

    showFramework() {
        let activeElement = this.activeFrameworkIndex;
        let leftPosition = this.randomBetween(50, window.innerWidth - 200) + 'px';
        let bottomPosition = this.randomBetween(170, window.innerHeight - 320) + 'px';
        this._frameworks[activeElement ]
            .css('display', 'block')
            .css('left', leftPosition)
            .css('bottom', bottomPosition);
        this.activeFrameworkIndex++;
        return this._frameworks[this.activeFrameworkIndex];
    }

}