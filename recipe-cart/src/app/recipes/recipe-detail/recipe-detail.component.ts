import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
  RecipeModel,
  IngredientModel
} from '../../shared/model/ui.model';
import { RecipeService } from '../../shared/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: RecipeModel;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService) {}

  ngOnInit() {
    this.route.params
    .subscribe((params: any) => {
      console.log(params);
      const id = +params['id'];
      this.recipe = this.recipeService.getRecipe(id);
    });
  }

  addToShoppingList() {
    this.recipeService.addIngredients(this.recipe.ingredients);
  }
}
