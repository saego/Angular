import { Component, OnInit} from '@angular/core';
import {BookModel} from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Array<BookModel>;

  constructor() {
  }

  ngOnInit() {
    this.books = [
      {id: 0, name: 'Accord', price: 1200, img: 'src/assets/images/accord.jpg'},
      {id: 1, name: 'Cruiser', price: 1201, img: 'src/assets/images/Cruiser200.jpg'},
      {id: 2, name: 'Peugeot', price: 1202, img: 'src/assets/images/Peugeot-407.jpg'}
    ];
  }

  onBuy(book: BookModel){
    console.log(`BOOKlist: ${book.name}`);
  }

}
