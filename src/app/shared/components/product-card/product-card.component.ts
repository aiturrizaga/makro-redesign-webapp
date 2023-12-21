import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartItem } from '../../../core/interfaces';
import { Product } from '../../../core/interfaces/product.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {
  @Input({required: true}) product?: Product;
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

  getCartItem(): CartItem {
    if (!this.product) {
      throw 'Product not defined in card';
    }
    const price: number = this.getDefaultPrice(this.product.prices);
    const cartItem: CartItem = {
      productId: this.product.id,
      productName: this.product.name,
      productImage: this.product.thumbnail,
      productPresentation: this.product.presentation,
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
