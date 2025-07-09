import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../../shared/header/header-one/header-one.component';
import { BreadcrumbOneComponent } from '../../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component';
import { ShopAreaComponent } from '../../shop-area/shop-area.component';
import { FooterOneComponent } from '../../../shared/footer/footer-one/footer-one.component';

@Component({
  standalone: true,
  imports: [HeaderOneComponent, BreadcrumbOneComponent, ShopAreaComponent, FooterOneComponent],
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {

}
