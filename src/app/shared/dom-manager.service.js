export default class DomManager {
    constructor() {
    };

    createElement(element) {
        let newElement = document.createElement(element);
        let thisProto = {
            appendText: this.appendText,
            appendToDom: this.appendToDom,
            attachEvent: this.attachEvent,
            appendElement: this.appendElement
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
        this.addEventListener(eventType, event);
        return this;
    }

}