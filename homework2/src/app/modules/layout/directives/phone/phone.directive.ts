import { Directive } from '@angular/core';
import { Validator, FormControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appPhone]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneDirective, multi: true }]
})
export class PhoneDirective implements Validator {
  constructor() { }

  validate(control: FormControl): ValidationErrors {
    const invalidPhoneFormat = {
      invalidPhoneFormat: true
    };

    if (isNaN(control.value)) {
      return invalidPhoneFormat;
    }

    const phone = String(control.value);
    const digitExpression = /([0-9])*\d/g;
    const characterExpression = /[^[A-z\s\d][\\\^]*/g;
    const isPhoneNumber = (phone.match(digitExpression), (!phone.match(characterExpression)));

    return isPhoneNumber ? null : invalidPhoneFormat;
  }

}
