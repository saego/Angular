import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookComponent } from './components/book/book.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ProcessOrderFormComponent } from './components/process-order-form/process-order-form.component';

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
