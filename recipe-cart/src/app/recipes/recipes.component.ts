import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes = [{
    name: 'Recipe 1',
    description: 'Very tasty',
    imagePath: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/BLT_sandwich_on_toast.jpg',
    ingredients: []
  }, {
    name: 'Recipe 2',
    description: 'Very tastyyyyyyyyyyyy',
    imagePath: 'http://www.freepngimg.com/download/burger/6-2-burger-png-image.png',
    ingredients: []
  }];
  recipe = {
    name: 'Recipe 1',
    description: 'Very tasty',
    imagePath: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/BLT_sandwich_on_toast.jpg',
    ingredients: [{
      name: 'Bread',
      quantity: 1
    }, {
      name: 'Cheese',
      quantity: 2
    }]
  };
  constructor() { }

  ngOnInit() {
  }

}
