import { Injectable, signal, WritableSignal } from '@angular/core';
import { CartItem, ShoppingCart } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {

  public cart: WritableSignal<ShoppingCart> = signal<ShoppingCart>({
    items: [],
    totalAmount: 0
  });

  constructor() {
  }

  saveItem(item: CartItem): void {
    this.cart.mutate(currentCart => {
      const index = currentCart.items.findIndex(i => i.productId === item.productId);
      if (index !== -1) {
        currentCart.items[index] = {...item};
      } else {
        currentCart.items.push(item);
      }
      currentCart.totalAmount = currentCart.items.reduce((next, item) => next + item.subtotal, 0);
    })
  }

  removeItem(productId: number): void {
    this.cart.mutate(currentCart => {
      const itemIndex = currentCart.items.findIndex(i => i.productId === productId);
      if (itemIndex !== -1) {
        const item = currentCart.items[itemIndex];
        currentCart.totalAmount -= item.price * item.quantity;
        currentCart.items.splice(itemIndex, 1);
      }
    })
  }
}
