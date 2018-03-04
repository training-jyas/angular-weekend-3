import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingModule } from './shopping/shopping.module';
import { RecipeService } from './shared/recipe.service';
import { IngredientService } from './shared/ingredient.service';
import { AppRouteModule } from './app-routing.module';
import { StorageService } from './shared/storage.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    HeaderModule,
    RecipesModule,
    ShoppingModule,
    AppRouteModule
  ],
  providers: [ RecipeService, IngredientService, StorageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
