import { Component, OnInit} from '@angular/core';
import {BookModel} from '../../models/book.model';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Promise<Array<BookModel>>;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.books = this.bookService.getBookAsync();
  }
  onBuy(book: BookModel){
    console.log(`BOOKlist: ${book.name}`);
  }

}
