import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesComponent } from './recipes.component';
import { RecipeDetailModule } from './recipe-detail/recipe-detail.module';
import { RecipeListModule } from './recipe-list/recipe-list.module';
import { RecipeDefaultComponent } from './recipe-default/recipe-default.component';

@NgModule({
  imports: [
    CommonModule,
    RecipeDetailModule,
    RecipeListModule
  ],
  declarations: [RecipesComponent, RecipeDefaultComponent],
  exports: [RecipesComponent]
})
export class RecipesModule { }
