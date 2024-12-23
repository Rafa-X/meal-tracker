import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ingredient } from '../types';
import { RouterModule } from '@angular/router';  //Necessary to use instructions related to routes

import { SmallXComponent } from '../small-x/small-x.component';

@Component({
  selector: 'app-ingredients-list',
  standalone: true,
  imports: [CommonModule, RouterModule, SmallXComponent],
  templateUrl: './ingredients-list.component.html',
  styleUrl: './ingredients-list.component.css'
})

export class IngredientsListComponent implements OnInit{
    //things to see in the list
    @Input() isLoading: boolean = true;
    @Input() ingredients: Ingredient[] = [];
    
    //output for the delete
    @Output() deleteIngredient = new EventEmitter<string>;

    constructor() {}

    ngOnInit(): void {
    }

    //emit an event that passes to HomePage the element to be deleted
    onDelete(ingredientName: string): void {
      this.deleteIngredient.emit(ingredientName);
    }
}