import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BackButtonComponent } from "../back-button/back-button.component";
import { FormsModule } from '@angular/forms';  //Makes usable the banana in a box syntax

import { IngredientsService } from '../ingredients.service';  //Needed to make changes to the Ingredients list

@Component({
  selector: 'app-add-ingredient-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, BackButtonComponent],
  templateUrl: './add-ingredient-page.component.html',
  styleUrl: './add-ingredient-page.component.css'
})
export class AddIngredientPageComponent {
    name: string =''; //Member variables to reference via ngModel
    amount: string ='';
    units: string ='';
    //add units options as a member variable - array
    unitOptions = [
      'pounds',
      'cups',
      'tablespoons',
      'teaspoons',
      'count',
    ];

    constructor(
        //provide the functionality modules to this component
        private router: Router,
        private ingredientsService: IngredientsService
    ) { }

    ngOnInit(): void {
    }

    //take the variables and send to the server to add a new ingredient
    //the subscribe executes after the request is sent
    addToIngredients(){
        this.ingredientsService.addIngredient(this.name, Number(this.amount), this.units)
          .subscribe(() => {
            alert('Successfully added ingredient');
        this.router.navigateByUrl('/');  //Send back to HomePage
        });
    }
}
