import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingComponent } from './shopping.component';
import { ManageIngredientModule } from './manage-ingredient/manage-ingredient.module';

@NgModule({
  imports: [
    CommonModule,
    ManageIngredientModule
  ],
  declarations: [ShoppingComponent],
  exports: [ShoppingComponent]
})
export class ShoppingModule { }
