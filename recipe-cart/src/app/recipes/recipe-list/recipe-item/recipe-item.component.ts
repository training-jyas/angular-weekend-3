import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {
  RecipeModel,
  IngredientModel
} from '../../../shared/model/ui.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeModel;
  @Output() recipeSelected = new EventEmitter<RecipeModel> ();
  constructor() { }

  ngOnInit() {
  }

  recipeItemClicked() {
    this.recipeSelected.emit(this.recipe);
  }
}
