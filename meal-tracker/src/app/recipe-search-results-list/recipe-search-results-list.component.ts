import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { MealsService } from '../meals.service';
import { Recipe, Ingredient } from '../types';

@Component({
  selector: 'app-recipe-search-results-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-search-results-list.component.html',
  styleUrl: './recipe-search-results-list.component.css'
})

export class RecipeSearchResultsListComponent {
    //The inputs are passed by the recipe-search-page.ts methods as defined in its HTML
    @Input() recipes: Recipe[] = [];
    @Input() ingredients: Ingredient[] = [];
    selectedDate: string = '';

    constructor(
        private mealsService: MealsService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.selectedDate = params['date'];
        });
    }

    //Use the recipe id to add a meal if all the ingredients are available
    addMealWithRecipe(recipeID: string){
        this.mealsService.addMeal(this.selectedDate, recipeID)
          .subscribe(() => {
              alert('Successfully added Recipe!');
              this.router.navigateByUrl('/');  //return to Home Page
          });
    }

    //get the missing ingredients for the inputed recipe
    getMissingIngredients(recipe: Recipe): Ingredient[] {
        //find the ingredients missing for the given recipe
        return recipe.ingredients.filter(recipeIngredient => 
          !this.ingredients.some(ingredient => ingredient.name === recipeIngredient.name)
        )  //search the ones that are not in the recipe
    }
}