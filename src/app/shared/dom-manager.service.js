export default class DomManager {

    constructor() {
    }

    createElement(element) {
        let newElement = document.createElement(element);
        let thisProto = {
            appendText: this.appendText,
            appendToDom: this.appendToDom,
            attachEvent: this.attachEvent,
            appendElement: this.appendElement,
            addClass: this.addClass,
            removeClass: this.removeClass,
            addAttribute: this.addAttribute
        };

        newElement.__proto__ = Object.assign(newElement.__proto__, thisProto);
        return newElement;
    }

    appendToDom(element) {
        document.body.appendChild(element);
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

    attachEvent(eventType, event) {
        this.addEventListener(eventType, event, false);
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


}