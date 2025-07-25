import { Component, Input } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
import { UtilsService } from '../../shared/services/utils.service';
import { IProduct } from '../../shared/types/product-d-t';
import { FeatureProductsComponent } from '../widget/feature-products/feature-products.component';
import { BrandFilteringComponent } from '../filtering/brand-filtering/brand-filtering.component';
import { CategoryFilterComponent } from '../filtering/category-filter/category-filter.component';
import { PriceFilterComponent } from '../filtering/price-filter/price-filter.component';
import { SizeFilteringComponent } from '../filtering/size-filtering/size-filtering.component';
import { ColorFilteringComponent } from '../filtering/color-filtering/color-filtering.component';
import { PaginationComponent } from '../../shared/ui/pagination/pagination.component';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';
import { ProductItemComponent } from '../product-item/product-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FeatureProductsComponent, BrandFilteringComponent, CategoryFilterComponent, PriceFilterComponent, SizeFilteringComponent, ColorFilteringComponent, PaginationComponent, ProductListItemComponent, ProductItemComponent],
  selector: 'app-shop-area',
  templateUrl: './shop-area.component.html',
  styleUrls: ['./shop-area.component.scss']
})
export class ShopAreaComponent {
  @Input() shop_right = false;
  @Input() shop_4_col = false;
  @Input() shop_3_col = false;

  public products: IProduct[] = [];
  public minPrice: number = 0;
  public maxPrice: number = 0;
  public niceSelectOptions: {
    value: string;
    text: string;
  }[] = [];
  public brands: string[] = [];
  public category: string | null = null;
  public subcategory: string | null = null;
  public size: string | null = null;
  public color: string | null = null;
  public brand: string | null = null;
  public pageNo: number = 1;
  public pageSize: number = 12;
  public paginate: any = {}; // Pagination use only
  public sortBy: string = 'asc'; // Sorting Order

  constructor(
    public productService: ProductService,
    public utilsService: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private viewScroller: ViewportScroller
  ) {
    this.route.queryParams.subscribe((params) => {
      // console.log('params', params);
      this.minPrice = params['minPrice'] ? params['minPrice'] : this.minPrice;
      this.maxPrice = params['maxPrice'] ? params['maxPrice'] : this.maxPrice;
      this.brand = params['brand'] ? params['brand'] : null;
      this.category = params['category'] ? params['category'] : null;
      this.subcategory = params['subcategory'] ? params['subcategory'] : null;
      this.size = params['size'] ? params['size'] : null;
      this.color = params['color'] ? params['color'] : null;
      this.pageNo = params['page'] ? params['page'] : this.pageNo;
      this.sortBy = params['sortBy'] ? params['sortBy'] : 'asc';

      // Get Filtered Products..
      this.productService.filterProducts().subscribe((response) => {
        // Sorting Filter
        this.products = this.productService.sortProducts(response, this.sortBy);
        // Category Filter
        if (this.category) {
          this.products = this.products.filter(
            (p) => this.utilsService.convertToURL(p.parentCategory) === this.category
          );
        }
        // sub category Filter
        if (this.subcategory) {
          this.products = this.products.filter(
            (p) => this.utilsService.convertToURL(p.category) === this.subcategory
          );
        }
        // size Filter
        if (this.size) {
          this.products = this.products.filter((product) => {
            return (
              product.sizes &&
              product.sizes.some((size) => size.toLowerCase() === this.size)
            );
          });
        }
        // color Filter
        if (this.color) {
          this.products = this.products.filter((product) => {
            return (
              product.colors &&
              product.colors.some((c) => c.split(' ').join('-').toLowerCase() === this.color)
            );
          });
        }
        // brand Filter
        if (this.brand) {
          this.products = this.products.filter((p) => p.brand.toLowerCase() === this.brand);
        }

        // Price Filter
        this.products = this.products.filter(
          (p) => p.price >= Number(this.minPrice) && p.price <= Number(this.maxPrice)
        );
        // Paginate Products
        this.paginate = this.productService.getPager(this.products.length, Number(+this.pageNo), this.pageSize);
        this.products = this.products.slice(this.paginate.startIndex, this.paginate.endIndex + 1);
      });
    });
  }
formatCategoryName(slug: string): string {
  return decodeURIComponent(slug)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
}

  ngOnInit() {
    this.maxPrice = this.productService.maxPrice;
    this.niceSelectOptions = this.productService.filterSelect;
    this.productService.filterProducts().subscribe((response) => {
      // Sorting Filter
      this.products = this.productService.sortProducts(response, this.sortBy);
      // Category Filter
      if (this.category) {
        this.products = this.products.filter(
          (p) => this.utilsService.convertToURL(p.parentCategory) === this.category
        );
      }
      // sub category Filter
      if (this.subcategory) {
        this.products = this.products.filter(
          (p) => this.utilsService.convertToURL(p.category) === this.subcategory
        );
      }
      // size Filter
      if (this.size) {
        this.products = this.products.filter((product) => {
          return (
            product.sizes &&
            product.sizes.some((size) => size.toLowerCase() === this.size)
          );
        });
      }
      // color Filter
      if (this.color) {
        this.products = this.products.filter((product) => {
          return (
            product.colors &&
            product.colors.some((c) => c.split(' ').join('-').toLowerCase() === this.color)
          );
        });
      }
      // brand Filter
      if (this.brand) {
        this.products = this.products.filter((p) => p.brand.toLowerCase() === this.brand);
      }

      // Price Filter
      this.products = this.products.filter(
        (p) => p.price >= Number(this.minPrice) && p.price <= Number(this.maxPrice)
      );
      // Paginate Products
      this.paginate = this.productService.getPager(this.products.length, Number(+this.pageNo), this.pageSize);
      this.products = this.products.slice(this.paginate.startIndex, this.paginate.endIndex + 1);
    });
  }
  // Append filter value to Url
  updateFilter(tags: any) {
    console.log('tags', tags);
  }

  onSortingChange(value: string) {
    this.sortByFilter(value);
  }
  // SortBy Filter
  sortByFilter(value: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { sortBy: value ? value : null },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    }).finally(() => {
      this.viewScroller.setOffset([120, 120]);
      this.viewScroller.scrollToAnchor('products'); // Anchore Link
    });
  }

  // product Pagination
  setPage(page: number) {
    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams: { page: page },
        queryParamsHandling: 'merge', // preserve the existing query params in the route
        skipLocationChange: false, // do trigger navigation
      })
      .finally(() => {
        this.viewScroller.setOffset([120, 120]);
        this.viewScroller.scrollToAnchor('products'); // Anchore Link
      });
  }

  handleResetFilter() {
    this.minPrice = 0;
    this.maxPrice = this.productService.maxPrice;
    this.router.navigate(['/shop']);
  }
}
