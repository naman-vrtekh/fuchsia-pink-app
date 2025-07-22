import { Component,Input } from '@angular/core';
import { IProduct } from '../../shared/types/product-d-t';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; 

import { ProductDetailsUpperComponent } from '../../shared/components/product-details-upper/product-details-upper.component';
import { ReviewFormComponent } from '../../shared/components/forms/review-form/review-form.component';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-product-details-area',
  standalone: true,
  imports: [
    CommonModule,
    ProductDetailsUpperComponent,
    ReviewFormComponent
  ],
  templateUrl: './product-details-area.component.html',
  styleUrls: ['./product-details-area.component.scss']
})
export class ProductDetailsAreaComponent {
  @Input() product:IProduct | undefined;
  constructor(
    private route: ActivatedRoute,
    public productService: ProductService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe((data) => {
        this.product = data;
      });
    }
  }
}
