import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../shared/recipe.service';
import { RecipeModel } from '../../shared/model/ui.model';

@Component({
  selector: 'app-recipe-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.css']
})
export class RecipeNewComponent implements OnInit {
  recipeForm: FormGroup;
  editMode = false;
  recipe: RecipeModel;
  id: number;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService) {}

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      if (params['id']) {
        this.id = params['id'];
        this.editMode = true;
        this.recipe = this.recipeService.getRecipe(this.id);
        console.log(this.recipe);
      } else {
        this.editMode = false;
      }
    });
    this.initForm();
  }

  initForm() {
    let name = '';
    let description = '';
    let imagePath = '';
    const ingredients = new FormArray([]);

    if (this.editMode) {
      name = this.recipe.name;
      description = this.recipe.description;
      imagePath = this.recipe.imagePath;
      if (this.recipe['ingredients']) {
        for (const ingredient of this.recipe.ingredients) {
          ingredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'quantity': new FormControl(ingredient.quantity, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': ingredients
    });
  }

  onSubmit() {
    console.log('form is submitted', this.recipeForm);
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
      this.router.navigate(['/recipes', this.id]);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
      this.router.navigate(['/recipes']);
    }
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'quantity': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
