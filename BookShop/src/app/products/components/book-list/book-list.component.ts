import { Component, OnInit } from '@angular/core';
import {BookModel} from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Array<BookModel>;

  constructor() {
    this.books = [
      {id: 0, name: 'Angular 1', price: 1200, img: 'img0'},
      {id: 1, name: 'Angular 2', price: 1201, img: 'img1'},
      {id: 2, name: 'Angular 3', price: 1202, img: 'img2'}
    ];
  }

  ngOnInit() {
  }

}
