import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingModule } from './shopping/shopping.module';
import { RecipeService } from './shared/recipe.service';
import { IngredientService } from './shared/ingredient.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    RecipesModule,
    ShoppingModule
  ],
  providers: [ RecipeService, IngredientService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
