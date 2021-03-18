import { CartItem } from '../models/cart-item';

export interface IShoppingCart {
  items: CartItem[];
  addItem(item: CartItem): void;
  removeItem(index: number): void;
  total(): number;
  isEmpty(): boolean;
  clear(): void;
}
