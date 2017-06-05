import {AbstractControl, ValidatorFn} from "@angular/forms";
import { parse, format, asYouType } from 'libphonenumber-js';

export function PhoneValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const phone = control.value;
        const phoneParsed = parse(control.value);
        let phoneInternetionalFormat = format(phoneParsed,'International_plaintext');
        const no = (phoneInternetionalFormat === undefined);
        return no ? {'wrongPhone': {phone}} : null;
    };
}