import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RecipeListComponent } from './recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [RecipeListComponent, RecipeItemComponent],
  exports: [RecipeListComponent]
})
export class RecipeListModule { }
