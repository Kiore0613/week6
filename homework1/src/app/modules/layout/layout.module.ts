import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [AccordionComponent, LayoutComponent],
  imports: [
    CommonModule
  ],
  exports: [AccordionComponent, LayoutComponent]
})
export class LayoutModule { }
