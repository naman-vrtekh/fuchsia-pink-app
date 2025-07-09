import { Component,HostListener,Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { UtilsService } from '../../services/utils.service';
import { CommonModule } from '@angular/common';
import { OffcanvasComponent } from '../../components/offcanvas/offcanvas.component';
import { SearchPopupComponent } from '../header-com/search-popup/search-popup.component';
import { ExtraInfoComponent } from '../header-com/extra-info/extra-info.component';
import { MiniCartComponent } from '../header-com/mini-cart/mini-cart.component';
import { NavManusComponent } from '../header-com/nav-manus/nav-manus.component';

@Component({
  standalone: true,
  imports: [CommonModule ],
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss']
})
export class HeaderOneComponent {
  @Input () header_big = false;
  @Input () white_bg = false;
  @Input () transparent = false;


  public sticky: boolean = false;

  constructor(
    public cartService: CartService,
    public utilsService: UtilsService,
  ) { }

  // sticky nav
  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 80) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}
