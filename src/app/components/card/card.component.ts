import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book';
import { RefPipe } from '../../pipes/ref.pipe';
import { EuroPipe } from '../../pipes/euro.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RefPipe, EuroPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() public id_book: number  = Number();
  @Input() public id_User: number  = Number();
  @Input() public title: string = "";
  @Input() public type: string = "";
  @Input() public author: string = "";
  @Input() public price: number  = Number() ;
  @Input() public photo: string = "";

  @Output()  deleteCard = new EventEmitter<number>();

  public getIdCard(id_book : number){
      this.deleteCard.emit(id_book);
    }
  }
