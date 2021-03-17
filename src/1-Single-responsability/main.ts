import { Order } from './classes/order';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';

const shoppingCart = new ShoppingCart();
const order = new Order(shoppingCart);

shoppingCart.addItem(new Product('Shirt', 50));
shoppingCart.addItem(new Product('Pants', 150));
shoppingCart.addItem(new Product('Book', 25));
shoppingCart.addItem(new Product('Pen', 2));

console.log(order.orderStatus);
order.finishOrder();
console.log(order.orderStatus);
