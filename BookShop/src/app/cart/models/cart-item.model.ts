import { BookModel } from 'src/app/products/models/book.model';

export class CartItemModel extends BookModel {

  constructor(id: number, name: string, price: number, public quantity: number, img?: string,) {
    super(id, name, price, img);
  }
}
