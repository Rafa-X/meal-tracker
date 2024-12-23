import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RecipeSearchPageComponent } from './recipe-search-page/recipe-search-page.component';
import { AddIngredientPageComponent } from './add-ingredient-page/add-ingredient-page.component';
import { ShoppingListPageComponent } from './shopping-list-page/shopping-list-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
},{
    path: "recipes",
    component: RecipeSearchPageComponent
},{
    path: 'add-ingredient',
    component: AddIngredientPageComponent
},{
    path: 'shopping-list',
    component: ShoppingListPageComponent
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }

/*
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routes';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule,
      FormsModule,
    RouterOutlet,
  ],
  providers: [],
})
export class AppModule { }
*/