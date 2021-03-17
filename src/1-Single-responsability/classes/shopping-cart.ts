import { CartItem } from '../models/cart-item';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  get items(): CartItem[] {
    return this._items;
  }

  addItem(item: CartItem): void {
    this.items.push(item);
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }

  total(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  clear(): void {
    this.items.length = 0;
  }
}
