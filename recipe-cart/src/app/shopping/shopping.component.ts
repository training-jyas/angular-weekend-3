import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import {
  IngredientModel
} from '../shared/model/ui.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit, OnChanges {
  @Input() ings: Array<IngredientModel>;

  ingredients = [
    new IngredientModel('Bread', 1),
    new IngredientModel('Bread', 1)
  ];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log(this.ings);
  }

  ngOnInit() {
    console.log(this.ings);
    this.ingredients.push(...this.ings);
  }

}
