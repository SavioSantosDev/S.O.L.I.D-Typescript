import { ShoppingCart } from './shopping-cart';
import { OrderStatus } from './../models/order-status';
import { Messaging } from './messaging';

export class Order {
  private _orderStatus: OrderStatus = 'open';
  private messaging = new Messaging();

  constructor(private readonly shoppingCart: ShoppingCart) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  set orderStatus(status: OrderStatus) {
    this._orderStatus = status;
  }

  checkout(): boolean {
    if (this.shoppingCart.isEmpty()) {
      this.messaging.sendMessage('Your shopping cart is empty');
      return false;
    } else {
      this.messaging.sendMessage('Your order is being processed...\n');
      return true;
    }
  }

  finishOrder(): void {
    if (this.checkout()) {
      console.log(this.shoppingCart.items);
      console.log(
        `Your order of $${this.shoppingCart.total()} has been successfully finish!`,
      );
      this.orderStatus = 'closed';
      this.shoppingCart.clear();
    }
  }
}
