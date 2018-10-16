import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookListComponent } from './products/components/book-list/book-list.component';
import { BookComponent } from './products/components/book/book.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { CartItemComponent } from './cart/components/cart-item/cart-item.component';
import { ProcessOrderFormComponent } from './orders/components/process-order-form/process-order-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookComponent,
    CartComponent,
    CartItemComponent,
    ProcessOrderFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
