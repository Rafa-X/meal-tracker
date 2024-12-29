import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(
      private http: HttpClient,
    ) { }

  getShoppingListItems(): Observable<String[]>{
      return this.http.get<String[]>('/api/shopping-list');
  }

}
