import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeDefaultComponent } from './recipes/recipe-default/recipe-default.component';
import { RecipeNewComponent } from './recipes/recipe-new/recipe-new.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
}, {
    path: 'recipes',
    component: RecipesComponent,
    children: [{
        path: '',
        component: RecipeDefaultComponent
    }, {
        path: 'new',
        component: RecipeNewComponent
    }, {
        path: ':id',
        component: RecipeDetailComponent
    }, {
        path: ':id/edit',
        component: RecipeNewComponent
    }]
}, {
    path: 'shopping',
    component: ShoppingComponent
}];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ]
})
export class AppRouteModule {

}