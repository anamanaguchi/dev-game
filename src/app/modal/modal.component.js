import CustomHtmlElement from "../shared/customHtmlElement";

class Modal extends CustomHtmlElement{
    constructor(){
        super();
    }

    createdCallback(){
        this.addClass('modal');
    }

    
}