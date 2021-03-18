import { IDiscount } from '../models/i-discount';
import { IShoppingCart } from '../models/i-shopping-cart';
import { CartItem } from '../models/cart-item';

export class ShoppingCart implements IShoppingCart {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discountCoupon?: IDiscount) {}

  get items(): CartItem[] {
    return this._items;
  }

  private subTotal(): number {
    return +this.items
      .reduce((total, item) => total + item.price, 0)
      .toFixed(2);
  }

  addItem(item: CartItem): void {
    this.items.push(item);
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }

  total(): number {
    return this.discountCoupon
      ? this.discountCoupon.calculate(this.subTotal())
      : this.subTotal();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  clear(): void {
    this.items.length = 0;
  }
}
