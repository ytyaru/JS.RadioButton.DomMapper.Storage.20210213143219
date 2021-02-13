//import Unique from './id/Unique.js';
//import Fieldset from './tag/Fieldset.js';
//import Input from './tag/Input.js';
//import Label from './tag/Label.js';
class FieldsetRadioButton {
    static create(radio) {
        const fieldset = Fieldset.create(radio);
        const inputLabels = Option.create(radio); 
        for (let inputLabel of inputLabels) {
            for (let element of inputLabel) {
                fieldset.appendChild(element);
            }
        }
        radio.remove();
    }
}
