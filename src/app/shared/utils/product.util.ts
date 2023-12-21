import { Injectable } from '@angular/core';
import { ProductPrice } from '../../core/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductUtil {
  getFlatPrices(prices: ProductPrice[]): any[] {
    return prices.filter(res => !res.salient);
  }

  getSalientPrice(prices: ProductPrice[]): any[] {
    return prices.filter(res => res.salient);
  }

  getDefaultPrice(prices: ProductPrice[]): number {
    const item = prices.find(res => res.default);
    return item?.price ?? 0;
  }
}
