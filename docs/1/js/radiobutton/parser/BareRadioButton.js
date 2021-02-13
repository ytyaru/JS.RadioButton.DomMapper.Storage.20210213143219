import Option from './Option.js';
export default class BareRadioButton {
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
