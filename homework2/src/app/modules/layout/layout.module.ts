import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { LayoutComponent } from './layout/layout.component';
import { PhoneDirective } from './directives/phone/phone.directive';
import { UrlDirective } from './directives/url/url.directive';
import { BirthdateDirective } from './directives/birthdate/birthdate.directive';



@NgModule({
  declarations: [FormComponent, LayoutComponent, PhoneDirective, UrlDirective, BirthdateDirective],
  imports: [
    CommonModule
  ],
  exports: [FormComponent, LayoutComponent, PhoneDirective, UrlDirective, BirthdateDirective]
})
export class LayoutModule { }
