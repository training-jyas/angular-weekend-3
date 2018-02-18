import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import {
  IngredientModel
} from '../shared/model/ui.model';
import { IngredientService } from '../shared/ingredient.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
  ingredients: IngredientModel[];

  constructor(private ingredientService: IngredientService) {}

  ngOnInit() {
    this.ingredients = this.ingredientService.getIngredients();
  }

}
