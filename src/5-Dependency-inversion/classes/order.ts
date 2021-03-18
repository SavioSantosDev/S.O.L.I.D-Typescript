import { IMessaging } from '../models/i-messaging';
import { OrderStatus } from '../models/order-status';
import { IShoppingCart } from '../models/i-shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly shoppingCart: IShoppingCart,
    private readonly messaging: IMessaging,
  ) {}

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
