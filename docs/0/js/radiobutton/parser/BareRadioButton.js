//import Unique from './id/Unique.js';
//import Input from './tag/Input.js';
//import Label from './tag/Label.js';
class BareRadioButton {
    static create(radio) {
        const inputLabels = Option.create(radio); 
        for (let inputLabel of inputLabels) {
            for (let element of inputLabel) {
                radio.parentNode.insertBefore(element, radio);
            }
        }
        radio.remove();
    }
}
