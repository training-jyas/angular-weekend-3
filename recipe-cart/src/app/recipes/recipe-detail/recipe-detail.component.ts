import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import {
  RecipeModel,
  IngredientModel
} from '../../shared/model/ui.model';
import { RecipeService } from '../../shared/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: RecipeModel;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() { }

  addToShoppingList() {
    this.recipeService.addIngredients(this.recipe.ingredients);
  }
}
