import {Component, EventEmitter, Input, Output} from '@angular/core';
import {faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FlashCard} from "../../models/flash-card";
import {ActivatedRoute} from "@angular/router";
import {FlashCardService} from "../../services/flash-card.service";

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.css']
})
export class FlashCardComponent {

  @Input() word!: string;
  @Input() translation!: string;
  @Output() removeClicked = new EventEmitter<void>();

  trashIcon = faTrash;

  emitRemove() {
    this.removeClicked.emit();
  }

}
