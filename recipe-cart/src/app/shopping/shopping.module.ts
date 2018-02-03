import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShoppingComponent],
  exports: [ShoppingComponent]
})
export class ShoppingModule { }
