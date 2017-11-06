import CustomHtmlElement from "../shared/customHtmlElement";

class Score extends CustomHtmlElement{

    constructor(){
        super();
    }

    createdCallback(){
        this.addClass('score')
        this._scoreValue = 0;
        this.innerHTML = 0;
    }

    set scoreValue(scoreValue){
        this._scoreValue = scoreValue;
        this.innerHTML = scoreValue;
        console.log("SCORE: " + this.scoreValue);
    }

    get scoreValue(){
        return this._scoreValue;
    }

    addScore(){
        this.scoreValue = ++this._scoreValue
    }

}

export default document.registerElement('score-tag', Score);