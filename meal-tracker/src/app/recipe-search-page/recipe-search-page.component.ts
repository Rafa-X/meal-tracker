import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IngredientsService } from '../ingredients.service';
import { RecipesService } from '../recipes.service';
import { Ingredient, Recipe } from '../types';
import { BackButtonComponent } from "../back-button/back-button.component";
import { RecipeSearchResultsListComponent } from "../recipe-search-results-list/recipe-search-results-list.component";

@Component({
  selector: 'app-recipe-search-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, BackButtonComponent, RecipeSearchResultsListComponent],
  templateUrl: './recipe-search-page.component.html',
  styleUrl: './recipe-search-page.component.css'
})
export class RecipeSearchPageComponent implements OnInit{
    searchInputValue: string = '';  //users input for recipe search
    ingredients: Ingredient[] = [];
    searchResults: Recipe[] = [];

    constructor(
        private ingredientsService: IngredientsService,
        private recipesService: RecipesService,
    ) {}

    ngOnInit(): void {
        //get the whole list of ingredients
        this.ingredientsService.getIngredients()
          .subscribe(ingredients => this.ingredients = ingredients)
    }

    //search the recipes that match the inputed value
    onSearchClicked(){
        this.recipesService.getSearchResults(this.searchInputValue)
        .subscribe(searchResults => this.searchResults = searchResults);
    }
}
