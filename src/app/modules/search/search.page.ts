import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/interfaces/product.interface';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './search.page.html',
  animations: [
    trigger('opacity', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('300ms ease', style({opacity: 0}))
      ])
    ]),
    trigger('translateX', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('300ms ease-in-out', style({transform: 'translateX(0)'}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0)'}),
        animate('300ms ease-in-out', style({transform: 'translateX(100%)'}))
      ])
    ]),
    trigger('opacityScale', [
      transition(':enter', [
        style({opacity: 0, transform: 'scale(.95)'}),
        animate('100ms ease-out', style({opacity: 1, transform: 'scale(1)'}))
      ]),
      transition(':leave', [
        style({opacity: 1, transform: 'scale(1)'}),
        animate('75ms ease-in', style({opacity: 0, transform: 'scale(.95)'}))
      ])
    ])
  ]
})
export class SearchPage implements OnInit {
  public showColorFilter: boolean = true;
  public showColorFilterMobile: boolean = true;
  public showCategoryFilter: boolean = false;
  public showCategoryFilterMobile: boolean = false;
  public showSizeFilter: boolean = false;
  public showSizeFilterMobile: boolean = false;

  public isOffCanvasMenu: boolean = false;
  public isOffCanvasMenuDialog: boolean = false;

  public showSortMenu: boolean = false;

  public products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getAll().subscribe(res => this.products = res);
  }

  toggleOffCanvasMenu(): void {
    this.showSortMenu = false;
    this.isOffCanvasMenu = !this.isOffCanvasMenu;

    if (this.isOffCanvasMenuDialog) {
      setTimeout(() => {
        this.isOffCanvasMenuDialog = !this.isOffCanvasMenuDialog;
      }, 400)
    } else {
      this.isOffCanvasMenuDialog = !this.isOffCanvasMenuDialog;
    }
  }

  toggleColorFilter(): void {
    this.showColorFilter = !this.showColorFilter;
  }

  toggleColorFilterMobile(): void {
    this.showColorFilterMobile = !this.showColorFilterMobile;
  }

  toggleCategoryFilter(): void {
    this.showCategoryFilter = !this.showCategoryFilter;
  }

  toggleCategoryFilterMobile(): void {
    this.showCategoryFilterMobile = !this.showCategoryFilterMobile;
  }

  toggleSizeFilter(): void {
    this.showSizeFilter = !this.showSizeFilter;
  }

  toggleSizeFilterMobile(): void {
    this.showSizeFilterMobile = !this.showSizeFilterMobile;
  }

  toggleSortMenu(): void {
    this.showSortMenu = !this.showSortMenu;
  }
}
