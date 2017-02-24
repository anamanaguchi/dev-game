export default class DomManager{
    constructor(){};

    createElement(element){
        return document.createElement(element);
    }

    appendToDom(element){
        document.body.appendChild(element);
    }

    appendToElement(parent,child){
        parent.appendChild(child);
    }

    attachEvent(element,eventType,event){
        element.addEventListener(eventType,event);
    }

}