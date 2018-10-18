import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input()
  book: BookModel;

  @Output()
  buy: EventEmitter<BookModel> = new EventEmitter<BookModel>();

  constructor() { }

  ngOnInit() {
    console.log('init BookComponent');
  }

  onBuy(event: any){
    //console.log('was clicked');
    console.log(`You've just bought ${this.book.name}`);
    //console.log(event);
    this.buy.emit(this.book);
  }
}
