import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingModule } from './shopping/shopping.module';
import { RecipeService } from './shared/recipe.service';
import { IngredientService } from './shared/ingredient.service';
import { AppRouteModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HeaderModule,
    RecipesModule,
    ShoppingModule,
    AppRouteModule
  ],
  providers: [ RecipeService, IngredientService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
