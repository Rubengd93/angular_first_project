import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { BooksService } from '../../shared/books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent {

  
  constructor(private readonly booksService: BooksService, private route: ActivatedRoute, private router: Router){}

  public edit (id: HTMLInputElement, link: HTMLInputElement, title: HTMLInputElement, type: HTMLInputElement, price: HTMLInputElement, autor: HTMLInputElement){
    const newBook: Book = {
      id_book : parseFloat(id.value),
      id_user : 0,
      title : title.value,
      type : type.value,
      author : autor.value,
      price : parseFloat(price.value),
      photo : link.value,
  }
  this.booksService.edit(newBook);
  
  this.booksService.updateApiBook(newBook).subscribe((data) => {
    this.router.navigateByUrl("/books")
  })
}

}
