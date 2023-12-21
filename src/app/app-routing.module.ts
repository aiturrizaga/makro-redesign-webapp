import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomePage } from './modules/home/home.page';
import { ShopCartPage } from './modules/shop-cart/shop-cart.page';
import { SearchPage } from './modules/search/search.page';
import { ProductPage } from './modules/product/product.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomePage
      },
      {
        path: 'cart',
        component: ShopCartPage
      },
      {
        path: 'search',
        component: SearchPage
      },
      {
        path: 'products/:slug',
        component: ProductPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
