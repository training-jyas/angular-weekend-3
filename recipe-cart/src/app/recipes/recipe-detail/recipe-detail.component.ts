import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output
} from '@angular/core';

import {
  RecipeModel,
  IngredientModel
} from '../../shared/model/ui.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: RecipeModel;
  @Output() addIngredients = new EventEmitter < Array < IngredientModel >> ();
  constructor() {}

  ngOnInit() {}

  addToShoppingList() {
    this.addIngredients.emit(this.recipe.ingredients);
  }
}
