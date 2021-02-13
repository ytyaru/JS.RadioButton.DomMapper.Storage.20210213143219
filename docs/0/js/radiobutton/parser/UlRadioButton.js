//import Unique from './id/Unique.js';
//import Input from './tag/Input.js';
//import Label from './tag/Label.js';
class UlRadioButton {
    static create(radio) {
        const ul = UlRadioButton.#createUl(radio);
        UlRadioButton.#createOptions(radio, ul);
        radio.parentNode.insertBefore(ul, radio);
        radio.remove();
    }
    static #createUl(radio) {
        const ul = document.createElement('ul');
        const class_value = radio.getAttribute('ul') || 'radio-button-group';
        ul.setAttribute('class', class_value);
        return ul;
    }
    static #createOptions(radio, ul) {
        const inputLabels = Option.create(radio); 
        for (let inputLabel of inputLabels) {
            const li = document.createElement('li');
            for (let element of inputLabel) {
                li.appendChild(element);
            }
            ul.appendChild(li);
        }
    }
}
