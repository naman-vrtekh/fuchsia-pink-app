import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadComponent: () => import('../app/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('../app/register/register.component').then(m => m.RegisterComponent)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('../app/shop/pages/shop/shop.component').then(m => m.ShopComponent)
    },
    {

    path: 'cart',
    loadComponent: () => import('../app/shop/pages/cart/cart.component').then(m => m.CartComponent)
  },
  {
  path: 'shop/shop-details/:id',
  loadComponent: () => import('../app/shop/product-details-area/product-details-area.component')
    .then(m => m.ProductDetailsAreaComponent)
},
{
  path: 'shop',
  loadComponent: () =>
    import('../app/shop/shop-area/shop-area.component').then(
      (m) => m.ShopAreaComponent
    )
},
  



];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }