import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItemModel } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

@Input()
boughtBook: CartItemModel;

@Output()
add: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();
@Output()
sub: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();

  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    console.log("Add button was pushed");
    this.add.emit(this.boughtBook);
  }

  onSub(){
    console.log("Substarct button was pushed");
    this.sub.emit(this.boughtBook);
  }

}
