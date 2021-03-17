interface CartItem {
  name: string;
  price: number;
}

type OrderStatus = 'open' | 'closed';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private orderStatus: OrderStatus = 'open';

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

  checkout(): void {
    if (this.isEmpty()) {
      console.log('The shopping cart is empty!');
      return;
    }

    this.finishOrder();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  finishOrder(): void {
    console.log(this.items);
    console.log(`Your order of ${this.total()} has been successfully finish!`);
    this.orderStatus = 'closed';
  }
}

const shoppingCart = new ShoppingCart();

shoppingCart.addItem({ name: 'Shirt', price: 50 });
shoppingCart.addItem({ name: 'Pants', price: 150 });
shoppingCart.addItem({ name: 'Book', price: 25 });
shoppingCart.addItem({ name: 'Pen', price: 2 });

shoppingCart.removeItem(3);

shoppingCart.finishOrder();
