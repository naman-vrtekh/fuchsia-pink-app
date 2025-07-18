import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import category_data from '../../../shared/data/category-data';
import { UtilsService } from '../../../shared/services/utils.service';
import { ICategoryType } from '../../../shared/types/category-d-t';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss'],
})
export class CategoryFilterComponent {
 public categoryList: string[] = [
  'Accessories',
  'Blouses',
  'Bottoms',
  'Classic Kurtas & Kurta Sets',
  'Co-ord Sets',
  'Dupattas',
  'Kurta Sets',
  'Lehengas',
  'Long Dresses & Tunics',
  'New Arrivals',
  'Sale',
  'Sarees',
  'Signature Fabrics',
  'Tops',
  'Uncategorised',
  'Unstitched Suits sets'
];

  public category: string | null = null;
  public subcategory: string | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public utilsService: UtilsService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.category = params['category'] ? params['category'] : null;
      this.subcategory = params['subcategory'] ? params['subcategory'] : null;
    });
  }

  public handleParentCategory(categoryValue: string): void {
    const currentQueryParams = this.route.snapshot.queryParams; // Get current query parameters
    const queryParams = {
      ...currentQueryParams, // Keep the existing query parameters
      category: this.utilsService.convertToURL(categoryValue),
    };
    this.router.navigate(['/shop'], { queryParams });
  }

  public handleSubCategory(subcategoryValue: string): void {
    const currentQueryParams = this.route.snapshot.queryParams; // Get current query parameters
    const queryParams = {
      ...currentQueryParams, // Keep the existing query parameters
      subcategory: this.utilsService.convertToURL(subcategoryValue),
    };
    this.router.navigate(['/shop'], { queryParams });
  }
}
