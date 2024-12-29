import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  //Necessary to use instructions related to routes like queryParams
import { Meal } from '../types';

import { SmallXComponent } from '../small-x/small-x.component';

//helper function to compare the planned date of a meal with a X day
const dateAreSameDay = (date1: Date, date2: Date): boolean =>
  date1.getFullYear() === date2.getFullYear()
  && date1.getMonth() === date2.getMonth()
  && date1.getDate() ===  date2.getDate();

@Component({
  selector: 'app-meals-list', 
  standalone: true,
  imports: [CommonModule, RouterModule, SmallXComponent],
  templateUrl: './meals-list.component.html',
  styleUrl: './meals-list.component.css'
})

export class MealsListComponent implements OnInit{
    //return an array with the next 7 days
    next7Days: Date[] = Array(7).fill(null).map((_, i) => {
      const date = new Date();
      date.setDate(date.getDate() + i);  //add the index to the actual date to make the 7
      return date;
    });

    //helps to set the array of 7 days meals or if a day doesn't have a meal, set undefined
    mealsForDays: (Meal | undefined)[] = [];
    
    @Input() isLoading: boolean = true;
    private _meals: Meal[] = [];
    //this way, whenever the meal changes cause the other properties to rely and be recomputed
    @Input() set meals(value: Meal[]){
        this._meals = value;
        //assign the meals for the next seven days generated
        //map each one to their corresponding meal
        this.mealsForDays = this.next7Days.map(
            day => this.meals.find(meal => dateAreSameDay(day, meal.plannedDate))
        )
    }

    get meals() { return this._meals };

    //call the function to delete, uses the id given
    @Output() deleteMeal = new EventEmitter<string>();  

    constructor() {}

    ngOnInit(): void {}

    onDelete(mealID: string ): void {
      this.deleteMeal.emit(mealID);  //create an event with the meal ID to delete
    }
}
