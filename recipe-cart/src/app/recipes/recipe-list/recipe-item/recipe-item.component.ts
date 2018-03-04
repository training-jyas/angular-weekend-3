import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {
  RecipeModel,
  IngredientModel
} from '../../../shared/model/ui.model';
import { RecipeService } from '../../../shared/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeModel;
  @Input() index: number|string;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    console.log(this.recipe, 'in recipe item on init');
  }

  selectRecipe() {
    this.recipeService.selectRecipe(this.recipe);
  }
}
