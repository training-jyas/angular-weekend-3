import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailComponent } from './recipe-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecipeDetailComponent],
  exports: [RecipeDetailComponent]
})
export class RecipeDetailModule { }
