import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Ingredient } from './types';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(
      private http: HttpClient,  //allows to make HTTP requests
  ) { }

  getIngredients(): Observable<Ingredient[]> {
      //send a http GET request, gets all the ingredients data
      return this.http.get<Ingredient[]>('/api/ingredients');  
  }

  deleteIngredient(name: string): Observable<Ingredient[]> {
      //send a DELETE request for the given NAME var ingredient
      return this.http.delete<Ingredient[]>(`/api/ingredients/${name}`);
  }
  
  addIngredient(name: string, amount: number, units: string): Observable<Ingredient[]> {
		const newIngredient = { name: name.toLowerCase(), amount, units };  //pack into a object
		return this.http.post<Ingredient[]>(`/api/ingredients`, newIngredient);
	}
}
