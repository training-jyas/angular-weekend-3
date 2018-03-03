import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

import {
  RecipeModel,
  IngredientModel
} from '../../shared/model/ui.model';
import { RecipeService } from '../../shared/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<RecipeModel> ();
  recipes: Array<RecipeModel> = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipesUpdated
    .subscribe((recipes: RecipeModel[]) => {
      this.recipes = recipes;
    });
  }

}
