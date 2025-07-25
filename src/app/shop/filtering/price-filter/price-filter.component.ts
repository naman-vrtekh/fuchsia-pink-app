import { ActivatedRoute, Router } from '@angular/router';
import {Component,Output,Input,EventEmitter,Inject,PLATFORM_ID} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { ViewportScroller } from '@angular/common';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  standalone: true,
  imports: [CommonModule, NgxSliderModule],
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',   
  styleUrls: ['./price-filter.component.scss']
})
export class PriceFilterComponent {
  @Output() priceFilter: EventEmitter<any> = new EventEmitter<any>();
  @Input() min!: number;
  @Input() max!: number;

  public collapse: boolean = true;
  public isBrowser: boolean = false;

  public price!: { minPrice: number; maxPrice: number };
  public options!: Options;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private viewScroller: ViewportScroller,
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true; // for ssr
    }
  }

  ngOnInit(): void {
    this.price = {
      minPrice: 0,
      maxPrice: this.productService.maxPrice,
    };

    this.options = {
      floor: 0,
      ceil: this.productService.maxPrice,
      hidePointerLabels: true,
    };
  }

  appliedFilter(event: any) {
    this.price = { minPrice: event.value, maxPrice: event.highValue };
    this.priceFilter.emit(this.price);
  }

  handlePriceRoute() {
    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams: this.price,
        queryParamsHandling: 'merge',
        skipLocationChange: false,
      })
      .finally(() => {
        this.viewScroller.setOffset([120, 120]);
        this.viewScroller.scrollToAnchor('products');
      });
  }
}

