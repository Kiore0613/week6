import { Validator, FormControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appUrl]',
  providers: [{ provide: NG_VALIDATORS, useExisting: UrlDirective, multi: true }]
})
export class UrlDirective implements Validator {

  constructor() { }

  validate(control: FormControl): ValidationErrors {
    const invalidUrlFormat = {
      invalidUrlFormat: true
    };
    const url = String(control.value);
    const characterExpression = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    const isUrl = url.match(characterExpression);

    return isUrl ? null : invalidUrlFormat;
  }
}
