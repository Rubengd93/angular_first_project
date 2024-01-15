import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { RefPipe } from '../../pipes/ref.pipe';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule,RefPipe],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  public book: Book [] = [
    {
      id_book : 1,
      id_user : 0,
      title : 'Los pilares de la Tierra',
      type : 'Fantasia',
      author : 'Ken Follet',
      price : 24,
      photo : 'https://m.media-amazon.com/images/I/91G5zRD4wDL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      id_book : 2,
      id_user : 0,
      title : 'El hijo olvidado',
      type : 'Drama',
      author : 'Mikel Santiago',
      price : 30,
      photo : 'https://imagessl8.casadellibro.com/a/l/s7/18/9788466677318.webp',
    },
    {
        id_book : 3,
        id_user : 0,
        title : 'La última partida',
        type : 'Asesinatos',
        author : 'Jorge I Aguadero',
        price : 20.80,
        photo : 'https://imagessl0.casadellibro.com/a/l/s7/40/9788466676540.webp',
    },
    

  ]

  public addBook(id: HTMLInputElement, link: HTMLInputElement, title: HTMLInputElement, type: HTMLInputElement, price: HTMLInputElement, autor: HTMLInputElement){
    const newBook: Book = {
        id_book : parseFloat(id.value),
        id_user : 0,
        title : title.value,
        type : type.value,
        author : autor.value,
        price : parseFloat(price.value),
        photo : link.value,
    }
    this.book.push(newBook);
  }

}
