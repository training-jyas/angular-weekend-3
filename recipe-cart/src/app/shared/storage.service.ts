import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { RecipeModel, IngredientModel } from './model/ui.model';

@Injectable()
export class StorageService {
    constructor(private http: HttpClient) {}

    fetchRecipes() {
        return this.http.get('https://ng-recipe-cart.firebaseio.com/recipes.json')
        .map((response: Response) => {
            console.log('recipes from db', response);
            const recipes: RecipeModel[] = [];
            for (const id in response) {
                if (response.hasOwnProperty(id)) {
                    const name = response[id]['name'];
                    const description = response[id]['description'];
                    const imagePath = response[id]['imagePath'];
                    const ingredients: IngredientModel[] = [];
                    if (response[id]['ingredients']) {
                        for (const key in response[id]['ingredients']) {
                            if (response[id]['ingredients'].hasOwnProperty(key)) {
                                ingredients.push(
                                    new IngredientModel(response[id]['ingredients'][key]['name'],
                                    response[id]['ingredients'][key]['quantity']));
                            }
                        }
                    }
                    const recipe = new RecipeModel(id, name, description, imagePath, ingredients);
                    recipes.push(recipe);
                }
            }
            return recipes;
        });
    }

    addRecipe(recipe: RecipeModel) {
        return this.http.post('https://ng-recipe-cart.firebaseio.com/recipes.json', recipe);
    }

    updateRecipe(recipe: RecipeModel) {
        return this.http.put('https://ng-recipe-cart.firebaseio.com/recipes/' + recipe.id + '.json', recipe);
    }

    deleteRecipe(recipe: RecipeModel) {
        return this.http.delete('https://ng-recipe-cart.firebaseio.com/recipes/' + recipe.id + '.json');
    }
}
