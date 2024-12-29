import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BackButtonComponent } from "../back-button/back-button.component";
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-page',
  standalone: true,
  imports: [CommonModule, RouterModule, BackButtonComponent],
  templateUrl: './shopping-list-page.component.html',
  styleUrl: './shopping-list-page.component.css'
})

export class ShoppingListPageComponent implements OnInit {
    isLoading = true;
    shoppingListItems: String[] = [];

    constructor(
        private shoppingListService: ShoppingListService,
    ) {}

    ngOnInit(): void {
        this.shoppingListService.getShoppingListItems()
          .subscribe(items => {
            this.shoppingListItems = items;  //save the items in the member variable
            this.isLoading = false;
          })
    }
}
