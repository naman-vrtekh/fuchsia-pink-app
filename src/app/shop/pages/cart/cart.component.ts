import { Component } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// ✅ Add the following components
import { HeaderOneComponent } from '../../../shared/header/header-one/header-one.component';
import { FooterOneComponent } from '../../../shared/footer/footer-one/footer-one.component';
import { BreadcrumbOneComponent } from '../../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
   imports: [
    CommonModule,
    RouterModule,
    HeaderOneComponent,
    FooterOneComponent,
    BreadcrumbOneComponent 
  ]
})


export class CartComponent {

  couponCode: string = '';
  shipCost: number = 0;

  constructor (public cartService:CartService) {}

  handleCouponSubmit() {
    if(this.couponCode){
      this.couponCode = ''
    }
  }

  handleShippingCost(value: number | string) {
    if (value === 'free') {
      this.shipCost = 0;
    } else {
      this.shipCost = value as number;
    }
  }
}
