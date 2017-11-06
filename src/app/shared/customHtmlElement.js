export default class CustomHtmlElement extends HTMLElement{
    constructor(){
        super();
    }

    appendToDom(element) {
        document.body.appendChild(element);
        return this;
    }

    remove(){
        this.parentNode.removeChild(this);
        return this;
    }

    appendText(text) {
        this.innerHTML = text;
        return this;
    }

    appendElement(child) {
        this.appendChild(child);
        return this;
    }

    appendElements(childArr){
        childArr.map((child)=>this.appendElement(child));
        return this;
    }

    attachEvent(eventType, event) {
        this.addEventListener(eventType, event, true);
        return this;
    }

    addClass(className) {
        this.classList.add(className);
        return this;
    }

    removeClass(className) {
        this.classList.remove(className);
        return this;
    }

    addAttribute(attr, value) {
        this.setAttribute(attr, value);
        return this;
    }

    css(property, value) {
        this.style[property] = value;
        return this;
    }
}