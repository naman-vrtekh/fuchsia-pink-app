import { Component } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { IProduct } from '../../../shared/types/product-d-t';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-feature-products',
  templateUrl: './feature-products.component.html',
  styleUrls: ['./feature-products.component.scss']
})
export class FeatureProductsComponent {

  public feature_products:IProduct[] = [];

  constructor(public productService:ProductService){
    this.productService.products.subscribe((products) => {
      this.feature_products = products.filter(p => p.trending).slice(0,2)
    });
  }

}
