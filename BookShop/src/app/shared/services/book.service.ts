import { Injectable } from '@angular/core';
import { BookModel } from 'src/app/products/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
books: Array<BookModel> = [
  {id: 0, name: 'Honda Accord', price: 1200, img: 'src/assets/images/accord.jpg'},
  {id: 1, name: 'Land Cruiser', price: 1201, img: 'src/assets/images/Cruiser200.jpg'},
  {id: 2, name: 'Peugeot 407', price: 1202, img: 'src/assets/images/Peugeot-407.jpg'}
]
  constructor() { }

  getBookAsync(): Promise<Array<BookModel>>{
      return new Promise(resolve => setTimeout(() => resolve(this.books), 1000))
  }
}
