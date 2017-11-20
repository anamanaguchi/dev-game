import CustomHtmlElement from '../shared/customHtmlElement';

class Enemy extends CustomHtmlElement{
    constructor() {
        super();
        this.addClass('enemy');
        this.css('display', 'none');
    }


   randomBetween(min, max) {
        if (min < 0) {
            return min + Math.random() * (Math.abs(min)+max);
        }else {
            return min + Math.random() * max;
        }
    }

    show() {
        let leftPosition = this.randomBetween(50, window.innerWidth - 200) + 'px';
        let bottomPosition = this.randomBetween(170, window.innerHeight - 320) + 'px';
        this.css('display', 'block')
            .css('left', leftPosition)
            .css('bottom', bottomPosition);
    }

}
customElements.define('enemy-tag', Enemy);

export default customElements.get('enemy-tag');
