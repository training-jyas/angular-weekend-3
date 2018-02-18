import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

import { RecipeModel, IngredientModel } from '../shared/model/ui.model';
import { RecipeService } from '../shared/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Output() addIngredients = new EventEmitter < Array < IngredientModel >> ();
  recipe: RecipeModel;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.recipeSelected
    .subscribe((recipe: RecipeModel) => {
      this.recipe = recipe;
    });
  }

  ingredientsWasAdded(ingredients: Array<IngredientModel>) {
    this.addIngredients.emit(ingredients);
  }

}
