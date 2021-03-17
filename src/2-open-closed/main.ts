import { DiscountCoupon } from './classes/discount-coupon';
import { Order } from './classes/order';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';

const coupoun = new DiscountCoupon(20);
const shoppingCart = new ShoppingCart(coupoun);
const order = new Order(shoppingCart);

shoppingCart.addItem(new Product('Shirt', 50));
shoppingCart.addItem(new Product('Pants', 150));
shoppingCart.addItem(new Product('Book', 25));
shoppingCart.addItem(new Product('Pen', 2));

console.log(order.orderStatus);
order.finishOrder();
console.log(order.orderStatus);
