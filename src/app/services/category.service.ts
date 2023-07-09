import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "../models/category";
import {Observable} from "rxjs";

const BASE_API_URL = "http://localhost:5000/categories"

// Można wstrzykiwać do modułu. Serwis odpowiada za bezpośrednie połączenie z aplikacją
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(BASE_API_URL);
   //  ta metoda jest bardzo generyczna, nie wie, co zostanie zwrócone
   //  z wywołania metody "get" chcemy dokonać rzutowania na listę z kategoriami "Category[]".
   //  metoda zwraca typ "Observable" - działa asynchronicznie.
  }

  addCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(BASE_API_URL, category);
  }

  // Dowolna odpowiedź, jaka przyjdzie z tego żądania
  // Dodajemy odwrócone nawiasy (nad tabem). Dodajemy znacznik "$", który oznacza, że zostanie przekazana jakaś zmienna.
  removeCategory(categoryId: number): Observable<any> {
    return this.httpClient.delete(`${BASE_API_URL}/${categoryId}`)
  }

}
