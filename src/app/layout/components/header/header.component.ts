import { Component, effect } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShopCartService } from '../../../core/services/shop-cart.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { CartItem } from '../../../core/interfaces';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './header.component.html',
  animations: [
    trigger('opacity', [
      transition(':enter', [
        style({opacity: 0}),
        animate('500ms ease-in-out', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('500ms ease-in-out', style({opacity: 0}))
      ])
    ]),
    trigger('translateX', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('500ms ease-in-out', style({transform: 'translateX(0)'}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0)'}),
        animate('500ms ease-in-out', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class HeaderComponent {
  public activeCategoryButton: boolean = false;
  public totalItems: number = 0;
  public totalAmount: number = 0;
  public cartItems: CartItem[] = this.shopCartService.cart().items;

  public isSlideOver: boolean = false;
  public isSlideOverDialog: boolean = false;

  public searchText: FormControl = new FormControl<string>('');

  constructor(private shopCartService: ShopCartService,
              private router: Router) {
    effect(() => {
      this.totalItems = this.shopCartService.cart().items.length;
      this.totalAmount = this.shopCartService.cart().totalAmount;
    });
  }

  goToSearchPage():void {
    const query = this.searchText.value;
    this.router.navigate(['search'], {queryParams: {q: query}}).then();
  }

  toggleCategoryButton(): void {
    this.activeCategoryButton = !this.activeCategoryButton;
  }

  toggleSlideOver() {
    this.isSlideOver = !this.isSlideOver;

    if (this.isSlideOverDialog) {
      setTimeout(() => {
        this.isSlideOverDialog = !this.isSlideOverDialog;
      }, 400)
    } else {
      this.isSlideOverDialog = !this.isSlideOverDialog;
    }
  }

  removeCartItem(productId: number): void {
    this.shopCartService.removeItem(productId);
  }

}
