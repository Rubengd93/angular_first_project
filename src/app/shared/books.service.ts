import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private book: Book [] = [
    {
      id_book : 1,
      id_user : 0,
      title : 'Los pilares de la Ruben',
      type : 'Fantasia',
      author : 'Ken Follet',
      price : 24,
      photo : 'https://m.media-amazon.com/images/I/91G5zRD4wDL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id_book : 2,
      id_user : 0,
      title : 'El hijo olvidado',
      type : 'Drama',
      author : 'Mikel Santiago',
      price : 30,
      photo : 'https://imagessl8.casadellibro.com/a/l/s7/18/9788466677318.webp'
    },
    {
      id_book : 3,
      id_user : 0,
      title : 'La última partida',
      type : 'Asesinatos',
      author : 'Jorge I Aguadero',
      price : 20.80,
      photo : 'https://imagessl0.casadellibro.com/a/l/s7/40/9788466676540.webp'
    },

    
    
  ]

  constructor() { }

  public getAll():Book[]{
    return this.book;
  }

  public add(newBook:Book){
    this.book.push(newBook);
  }

  public delete(id_book:number){
    const search = this.book.findIndex(book => book.id_book === id_book);
    this.book.splice(search, 1);
  }

 
  public getOne(id:number):Book[] | [] {

    const book = this.book.find((book) => book.id_book === id);
    if (book) {
      return [book];
    }
    return [];
  }


  public edit(book : Book ){
    const index = this.book.findIndex(b => b.id_book === book.id_book );
    this.book[index] = book; 
  }
}
