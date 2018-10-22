import { Component, OnInit} from '@angular/core';
import {BookModel} from '../../models/book.model';
import { BookService } from 'src/app/shared/services/book.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Promise<Array<BookModel>>;

  constructor(private bookService: BookService, private cartService: CartService) {
  }

  ngOnInit() {
    this.books = this.bookService.getBookAsync();
  }
  onBuy(book: BookModel){
    console.log(`BOOKlist: ${book.name}`);
    this.cartService.addToCart(book);
  }

}
