import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartItem } from '../../../core/interfaces';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {
  @Input({required: true}) product: any;
  @Output() increaseQuantity: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() decreaseQuantity: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  public quantity: number = 0;

  increase(): void {
    this.quantity++;
    this.increaseQuantity.emit(this.getCartItem());
  }

  decrease(): void {
    this.quantity--;
    this.decreaseQuantity.emit(this.getCartItem());
  }

  getCartItem() {
    const price: number = this.getDefaultPrice(this.product.prices);
    const cartItem: CartItem = {
      productId: this.product.id,
      productName: this.product.name,
      price: price,
      quantity: this.quantity,
      subtotal: price * this.quantity
    }
    return cartItem;
  }

  getDefaultPrice(prices: any[]): number {
    const item = prices.find(res => res.default);
    return item.price;
  }

  getFlatPrices(prices: any[]): any[] {
    return prices.filter(res => !res.salient);
  }

  getSalientPrice(prices: any[]): any[] {
    return prices.filter(res => res.salient);
  }
}