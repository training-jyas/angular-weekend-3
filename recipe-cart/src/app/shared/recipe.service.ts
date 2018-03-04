import {
  Injectable
} from '@angular/core';
import { Router } from '@angular/router';
import {
  IngredientModel,
  RecipeModel
} from './model/ui.model';
import {
  Subject
} from 'rxjs/Subject';
import {
  IngredientService
} from './ingredient.service';
import {
  StorageService
} from './storage.service';

@Injectable()
export class RecipeService {
  recipeSelected = new Subject < RecipeModel > ();
  recipesUpdated = new Subject < RecipeModel[] > ();

  private recipes: Array < RecipeModel > = [];

  constructor(private ingredientService: IngredientService,
    private storageService: StorageService,
    private router: Router) {}

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  getRecipes() {
    this.storageService.fetchRecipes()
      .subscribe((recipes: RecipeModel[]) => {
        this.recipes = recipes;
        this.recipesUpdated.next(this.recipes);
      }, (error) => {
        console.log('error in fetch');
      });
  }

  selectRecipe(recipe: RecipeModel) {
    this.recipeSelected.next(recipe);
  }

  removeRecipe(recipe: RecipeModel) {
    this.storageService.deleteRecipe(recipe)
    .subscribe(resonse => {
      console.log('successful delete');
      this.router.navigate(['recipes']);
    }, (error) => {
      console.log('error in delete');
    });
  }

  updateRecipe(recipe: RecipeModel) {
    console.log(recipe, 'in update recipe service');
    this.storageService.updateRecipe(recipe)
      .subscribe((response) => {
        console.log(response);
        this.recipes.forEach((item: RecipeModel) => {
          if (item.id === recipe.id) {
            item.id = recipe.id;
            item.name = response['name'];
            item.description = response['description'];
            item.imagePath = response['imagePath'];
            item.ingredients = response['ingredients'] || [];
          }
        });
        this.router.navigate(['recipes']);
      }, (error) => {
        console.log('error in update');
      });
  }

  addRecipe(recipe: RecipeModel) {
    this.storageService.addRecipe(recipe)
      .subscribe(response => {
        console.log('success save', response);
        this.router.navigate(['recipes']);
      }, (error) => {
        console.log('error in update');
      });
  }

  addIngredients(ingredients: IngredientModel[]) {
    this.ingredientService.addIngredients(ingredients);
  }

}
