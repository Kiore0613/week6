import { Directive } from '@angular/core';
import { Validator, FormControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appBirthdate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: BirthdateDirective, multi: true }]
})
export class BirthdateDirective implements Validator {
  constructor() { }

  validate(control: FormControl): ValidationErrors {
    const invalidDate = {
      invalidDate: true
    };

    const date = new Date();
    date.setDate(date.getDate() - 2);
    const birthDate = new Date(control.value);
    const isValidDate = birthDate.getTime() <= date.getTime();

    return isValidDate ? null : invalidDate;
  }

}
