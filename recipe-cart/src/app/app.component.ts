import { Component, ViewEncapsulation } from '@angular/core';

import { IngredientModel } from './shared/model/ui.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  feature = 'recipes';
  ingredients: Array<IngredientModel>;

  featureWasSelected(feature: string) {
    this.feature = feature;
  }

  ingredientsWasAdded(ingredients: Array<IngredientModel>) {
    console.log(ingredients);
    this.ingredients = ingredients;
  }
}
