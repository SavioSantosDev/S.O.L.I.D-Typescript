import { CartItem } from '../models/cart-item';

export class Product implements CartItem {
  constructor(public name: string, public price: number) {}
}
