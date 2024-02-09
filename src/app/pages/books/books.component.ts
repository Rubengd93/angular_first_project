import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { RefPipe } from '../../pipes/ref.pipe';
import { CardComponent } from '../../components/card/card.component';
import { BooksService } from '../../shared/books.service';
import { EuroPipe } from '../../pipes/euro.pipe';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule,RefPipe, CardComponent, EuroPipe],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  public books : Book[] = [];
  constructor(public readonly booksService: BooksService){

    
    this.booksService.getAllApi().subscribe((data:any) => {
      this.books = data;
      
    });

    
    
  }

  ngOnInit():void{
      // this.books = this.booksService.getAll();  
      this.books = [];  
  }


  public getDataCard(id : number){
    // this.booksService.delete(id);
   
    this.booksService.deleteBookApi(id).subscribe((data) => {
      this.booksService.getAllApi().subscribe((data:any) => {
        this.books = data;
      });
    })

    
  }

  // public getBook(id:HTMLInputElement){
  //   if (id.value == "") {
  //     this.books = this.booksService.getAll();
  //   }else{
  //     this.books = this.booksService.getOne(Number(id.value));
  //   }
  // }

    public getBook(id:HTMLInputElement){
    if (id.value == "") {
      this.booksService.getAllApi().subscribe((data:any) => {
        console.log(data);
        
        this.books = data;
      })
    }else{
      this.booksService.getOneApi(Number(id.value)).subscribe((data:any) => {
        console.log(data);
        
        this.books = [data];
      });
    }
  }

}
