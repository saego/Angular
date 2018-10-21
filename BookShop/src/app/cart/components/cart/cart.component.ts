import { Component, OnInit } from '@angular/core';
import {CartItemModel} from '../../models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Array<CartItemModel>;
  constructor() {
    
  }

  ngOnInit() {
    this.products = [
      {id: 0, name: 'CSS1', price: 1000, img: 'img4', quantity: 12},
      {id: 1, name: 'CSS2', price: 1001, img: 'img5', quantity: 11},
      {id: 3, name: 'CSS3', price: 1002, img: 'img6', quantity: 10}
    ];
  }

  onAdd(product: CartItemModel){
    console.log(`Added 1 pice of ${product.name}`);
    this.products.forEach(p => {
      if(p.name == product.name){
        p.quantity++;
      }
    });
  }

  onSub(product: CartItemModel){
    console.log(`Substructed 1 pice of ${product.name}`);
    this.products.forEach(p => {
      if(p.name == product.name){
        p.quantity--;
      }
    });
  }

}