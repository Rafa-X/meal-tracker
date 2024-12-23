import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './types';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(
    private http: HttpClient,
  ) { }

  //returns an Observable with the recipe found
  getSearchResults(searchString: string): Observable<Recipe[]>{
      return this.http.get<Recipe[]>(`/api/recipes?search=${searchString}`);
      //the $search is a query param to input the searchString
  }
}