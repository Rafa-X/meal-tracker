import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Meal, MealRaw } from './types';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

    constructor(
        private http: HttpClient,  //allows to make HTTP requests
    ) { }

    //uses a custome object from types
    formatMealDate(rawMeal: MealRaw): Meal {  //populate the date when load meals from server
      return {
          ...rawMeal,  //get all the date from object
          //convert the string planned date of the RawMeal into a Date object
          plannedDate: new Date(rawMeal.plannedDate),  
      };
    }
    //Signatures for each method
    getMeals(): Observable<Meal[]> {  //way Angular handles async data load from server
        //create a GET request
        return this.http.get<MealRaw[]>('/api/meals')
			.pipe(map(rawMeals => rawMeals.map(rawMeal => this.formatMealDate(rawMeal))));
            //for each raw meal gathered from the server, convert into a MEAL object
    }

    deleteMeal(id: string): Observable<Meal[]>{  //this takes the id object to delete
        return this.http.delete<MealRaw[]>(`/api/meals/${id}`)  //gives the meal id to delete
            .pipe(map(rawMeals => rawMeals.map(rawMeal => this.formatMealDate(rawMeal))));
            //for each row meal, checks the incidence and erase it
            //then format from string to Date the meal date
    }

    addMeal(date: string, recipeID: string): Observable<Meal[]>{
        return this.http.post<MealRaw[]>(`/api/meals`, {date, recipeID})
            .pipe(map(rawMeals => rawMeals.map(rawMeal => this.formatMealDate(rawMeal))));
    }
}
