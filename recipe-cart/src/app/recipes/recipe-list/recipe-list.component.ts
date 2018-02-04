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

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<RecipeModel> ();
  recipes: Array < RecipeModel > = [
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
  constructor() {}

  ngOnInit() {}

  recipeWasSelected(recipe: RecipeModel) {
    this.recipeSelected.emit(recipe);
  }

}
