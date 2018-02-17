import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailComponent } from './recipe-detail.component';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecipeDetailComponent, DropdownDirective],
  exports: [RecipeDetailComponent]
})
export class RecipeDetailModule { }
