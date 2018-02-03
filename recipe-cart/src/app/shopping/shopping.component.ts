import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingredients = [{
    name: 'Bread',
    quantity: 1
  }, {
    name: 'Cheese',
    quantity: 2
  }];

  constructor() { }

  ngOnInit() {
  }

}
