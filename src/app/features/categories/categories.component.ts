import {Component} from '@angular/core';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Category} from "../../models/category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  plusIcon = faPlus;

  categories: Category[] = [{name: "Sport"}, {name: "Dom"}];
  // inicjalizacja zmiennej. Użytkownik będzie mógł dodawać nową wartość
  categoryName = "";

//  Metoda dodająca kategorie. Po "push" dajemy "name" - nazwę klucza
  addCategory() {
    this.categories.push({name: this.categoryName})
  //  czyszczenie wartości
    this.categoryName = ""
  }
}
