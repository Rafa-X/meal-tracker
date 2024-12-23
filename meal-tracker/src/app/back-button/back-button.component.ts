import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-button',
  standalone: true,
  imports: [],
  templateUrl: './back-button.component.html',
  styleUrl: './back-button.component.css'
})
export class BackButtonComponent {
    constructor(
      //inject the imported module in the constructor
      private location: Location,
    ){ }

    //send the user back to the previous location they were in the browser
    goBack(): void{
      this.location.back();
    }
}
