import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../ingredients.service';
import { MealsService } from '../meals.service';
import { Ingredient, Meal } from '../types';

import { MealsListComponent } from '../meals-list/meals-list.component';
import { IngredientsListComponent } from '../ingredients-list/ingredients-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MealsListComponent, IngredientsListComponent ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})

export class HomePageComponent implements OnInit {
  isLoadingMeals = true;  //both are true to load the data in the page start
  meals: Meal[] = [];  //array to store the meals

  isLoadingIngredients = true;
  ingredients: Ingredient[] = [];
  

  constructor(
      private mealsService: MealsService,
      private ingredientsService: IngredientsService,
  ) {}
  
  ngOnInit(): void {
      this.mealsService.getMeals() //this is the way to load data in Angular
          .subscribe(meals => {
              this.meals = meals;
              this.isLoadingMeals = false;
          });
      this.ingredientsService.getIngredients()
          .subscribe(ingredients => {
              this.ingredients = ingredients;
              this.isLoadingIngredients = false;
          });
  }

  onDeleteMeal(mealID: string){
      this.mealsService.deleteMeal(mealID) //specify in URL the one to delete
          .subscribe(updateMeals => {
              this.meals = updateMeals;
          });
  }

  onDeleteIngredient(ingredientName: string){
    this.ingredientsService.deleteIngredient(ingredientName) //specify in URL the one to delete
        .subscribe({
            next: (updatedIngredients) => { 
            this.ingredients = updatedIngredients
            }, 
            error: (error) => { 
                console.error('Error al eliminar el ingrediente:', error); 
            }
        });
  }
}
