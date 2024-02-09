import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/books.service';
import { Book } from '../../models/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {


  constructor(private readonly booksService: BooksService, private route: ActivatedRoute, private router: Router){}

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
    // this.booksService.add(newBook);
    
    this.booksService.addBookApi(newBook).subscribe((data) =>{
      this.router.navigateByUrl("/books")
    })
  }

  ngOnInit(){

  
    
  }
}
