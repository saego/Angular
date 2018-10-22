import { Injectable } from '@angular/core';
import { BookModel } from 'src/app/products/models/book.model';
import { CartItemModel } from 'src/app/cart/models/cart-item.model';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cartItems: Array<CartItemModel> = [
      {id: 0, name: 'Toyota Camry', price: 1000, quantity: 12}
      // {id: 1, name: 'Jeep Grand Cherokee', price: 1001, quantity: 11},
      // {id: 3, name: 'Dodge Nitro', price: 1002, quantity: 10}
  ];

  totalCost: number = 0;
  constructor() { }

  prodLenth: number;

  
  getCartItems(): Array<CartItemModel>{  
    this.updateTotals();
    return this.cartItems;
  }

  addToCart(book: BookModel){
      let found: boolean = false;
      this.cartItems.forEach(item => {
        if(item.name == book.name && item.price == book.price){
          item.quantity++;
          found = true;
        }
      });
      if(!found){
        this.cartItems.push(new CartItemModel(book.id, book.name, book.price, 1));
      }
      this.updateTotals();
      this.getProdNumbers();
      console.log("!!!!!!!$$$$$$");
  }

  remFromCart(cartItem: CartItemModel){
    let index: number;  
    this.cartItems.forEach(element => {
      console.log("Current index: " + this.cartItems.indexOf(element));
        if(element.name == cartItem.name && element.price == cartItem.price){
            index = this.cartItems.indexOf(element);
            console.log("Index: " + index);
        }
    })
      this.cartItems.splice(index, 1);
      console.log(this.cartItems);
  }

  incQuantity(cartItem: CartItemModel){
      this.cartItems.forEach(element => {
        if(cartItem.name == element.name && cartItem.price == element.price){
          element.quantity++;
        }
      });
      this.updateTotals();
  }

  decQuantity(cartItem: CartItemModel){
      this.cartItems.forEach(element => {
        if(cartItem.name == element.name && cartItem.price == element.price){
          element.quantity--;
        }
      });
      this.updateTotals();
  }

  updateTotals(){
    this.totalCost = 0;  
    this.cartItems.forEach(item => {
        this.totalCost = this.totalCost + item.price * item.quantity;
      });
      console.log(`Total cost in bucket: ` + this.totalCost);
      return this.totalCost;
  }

  getProdNumbers(){
    console.log("Card items length: " + this.cartItems.length);
    this.prodLenth = this.cartItems.length;
    return this.cartItems.length;
  }
}
