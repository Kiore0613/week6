import { Directive } from "@angular/core";
import {
  ValidationErrors,
  FormControl,
  NG_VALIDATORS,
  Validator
} from "@angular/forms";

@Directive({
  selector: "[appEmail]",
  providers: [
    { provide: NG_VALIDATORS, useExisting: EmailDirective, multi: true }
  ]
})
export class EmailDirective implements Validator {
  constructor() {}

  validate(control: FormControl): ValidationErrors {
    const invalidEmailFormat = {
      invalidEmailFormat: true
    };

    const email = String(control.value);
    const emailExpression = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    const isEmail = email.match(emailExpression);

    return isEmail ? null : invalidEmailFormat;
  }
}
