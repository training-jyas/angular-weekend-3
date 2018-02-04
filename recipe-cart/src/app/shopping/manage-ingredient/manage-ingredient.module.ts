import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageIngredientComponent } from './manage-ingredient.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ManageIngredientComponent],
  exports: [ManageIngredientComponent]
})
export class ManageIngredientModule { }
