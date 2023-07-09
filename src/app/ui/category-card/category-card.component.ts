import {Component, Input} from '@angular/core';
import {faComments, faPlay, faTrash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent {
  // Zmienna name posiada parameter "?", który pozwala na przekazywanie pustych wartości
  // Komponent imput będzie miał atrybut "categoryName"
  @Input() categoryName?: string;

  trashIcon = faTrash;
  commentsIcon = faComments;
  playIcon = faPlay;
}