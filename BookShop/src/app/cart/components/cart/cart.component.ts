import { Component, OnInit } from '@angular/core';
import {CartItemModel} from '../../models/cart-item.model';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  products: Array<CartItemModel>;
  totalPrice: number;
  productsQuantity: number;
  constructor(private cartService: CartService) {
    
  }

  ngOnInit() {
    // this.products = [
      // {id: 0, name: 'CSS1', price: 1000, img: 'img4', quantity: 12}
    //   {id: 1, name: 'CSS2', price: 1001, img: 'img5', quantity: 11},
    //   {id: 3, name: 'CSS3', price: 1002, img: 'img6', quantity: 10}
    // ];
    this.products = this.cartService.getCartItems();
    this.totalPrice = this.cartService.updateTotals();
    this.productsQuantity = this.cartService.getProdNumbers();
    console.log("!!!!!!!!!!!" + this.productsQuantity);
  }

  onAdd(product: CartItemModel){
    console.log(`Added 1 pice of ${product.name}`);
    this.cartService.incQuantity(product);
    this.totalPrice = this.cartService.updateTotals();
    this.productsQuantity = this.cartService.getProdNumbers();
  }

  onSub(product: CartItemModel){
    console.log(`Substructed 1 pice of ${product.name}`);
    this.cartService.decQuantity(product);
    this.totalPrice = this.cartService.updateTotals();
    this.productsQuantity = this.cartService.getProdNumbers();
  }

  onRemove(product: CartItemModel){
    console.log(`Removed ${product.name}`);
    this.cartService.remFromCart(product);
    this.totalPrice = this.cartService.updateTotals();
    this.productsQuantity = this.cartService.getProdNumbers();
  }

}