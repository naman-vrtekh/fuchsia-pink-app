import { Component } from '@angular/core';
import { UtilsService } from '../../../services/utils.service';
import { CommonModule } from '@angular/common';
import { ProductDetailsUpperComponent } from '../../product-details-upper/product-details-upper.component';

@Component({
  standalone: true,
  imports: [CommonModule, ProductDetailsUpperComponent],
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent {

  constructor(public utilsService:UtilsService){}

}
