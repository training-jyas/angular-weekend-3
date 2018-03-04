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
  id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService) {}

  ngOnInit() {
    this.route.params
    .subscribe((params: any) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
      console.log(this.recipe, 'in recipe detail in oninit');
    });
  }

  editRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  deleteRecipe() {
    this.recipeService.removeRecipe(this.recipe);
  }

  addToShoppingList() {
    this.recipeService.addIngredients(this.recipe.ingredients);
  }
}
