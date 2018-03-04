import {
  IngredientModel
} from './model/ui.model';
import { Subject } from 'rxjs/Subject';

export class IngredientService {
  ingredientsAdded = new Subject<IngredientModel[]>();

  private ingredients = [
    new IngredientModel('Bread', 1),
    new IngredientModel('Jam', 1)
  ];

  getIngredients() {
    return [].concat(this.ingredients);
  }

  addIngredients(ingredients: IngredientModel[]) {
    this.ingredients = this.ingredients.concat(ingredients);
    // this.ingredientsAdded.next(ingredients);
  }
}
