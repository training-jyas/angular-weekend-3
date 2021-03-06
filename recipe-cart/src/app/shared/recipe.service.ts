import {
  IngredientModel,
  RecipeModel
} from './model/ui.model';
import { Subject } from 'rxjs/Subject';
import { IngredientService } from './ingredient.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
  recipeSelected = new Subject<RecipeModel>();
  recipesUpdated = new Subject<RecipeModel[]>();

  private recipes: Array < RecipeModel > = [
    new RecipeModel(
      'Recipe 1',
      'Very tasty', 'https://upload.wikimedia.org/wikipedia/commons/e/e6/BLT_sandwich_on_toast.jpg', [
        new IngredientModel('Bread', 1),
        new IngredientModel('Cheese', 2)
      ]),
    new RecipeModel(
      'Recipe 2',
      'Very tastyyyyy', 'http://www.freepngimg.com/download/burger/6-2-burger-png-image.png', [
        new IngredientModel('Bun', 2),
        new IngredientModel('Ketchup', 1)
      ])
  ];

  constructor(private ingredientService: IngredientService) { }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  selectRecipe(recipe: RecipeModel) {
    this.recipeSelected.next(recipe);
  }

  removeRecipe(id: number) {
    this.recipes.splice(id, 1);
  }

  updateRecipe(id: number, recipe: RecipeModel) {
    this.recipes.splice(id, 1, recipe);
    this.recipesUpdated.next(this.recipes.slice());
  }

  addRecipe(recipe: RecipeModel) {
    this.recipes.push(recipe);
    this.recipesUpdated.next(this.recipes.slice());
  }

  addIngredients(ingredients: IngredientModel[]) {
    this.ingredientService.addIngredients(ingredients);
  }
}
