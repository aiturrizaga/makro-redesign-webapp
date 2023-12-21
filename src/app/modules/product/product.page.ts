import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../core/interfaces/product.interface';
import { ProductService } from '../../core/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.page.html',
  styles: []
})
export class ProductPage {

  public product?: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(p => {
      const slug = p['slug'];
      if (slug) {
        this.getProduct(slug);
      }
    })
  }

  getProduct(slug: string): void {
    this.productService.getBySlug(slug)
      .subscribe(res => this.product = res);
  }

  getFlatPrices(prices: any[]): any[] {
    return prices.filter(res => !res.salient);
  }

  getSalientPrice(prices: any[]): any[] {
    return prices.filter(res => res.salient);
  }

}
