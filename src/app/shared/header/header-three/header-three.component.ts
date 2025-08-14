import { Component, HostListener, OnInit, OnDestroy, input } from '@angular/core';
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
  imports: [CommonModule, OffcanvasComponent, SearchPopupComponent, ExtraInfoComponent, MiniCartComponent],
  selector: 'app-header-three',
  templateUrl: './header-three.component.html',
  styleUrls: ['./header-three.component.scss']
})
export class HeaderThreeComponent implements OnInit, OnDestroy {
  public sticky: boolean = false;

  // Add your announcements here:
  announcements = [
    "Get 15-20% discount on selected styles! 🛒",
    "Threads of love",
    "7 day return & exchange"
  ];
  currentAnnouncement = 0;
  private intervalRef: any;

  constructor(
    public cartService: CartService,
    public utilsService: UtilsService,
  ) { }

  ngOnInit() {
    this.intervalRef = setInterval(() => {
      this.currentAnnouncement = (this.currentAnnouncement + 1) % this.announcements.length;
    }, 5000);
  }

  ngOnDestroy() {
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
    }
  }

  prevAnnouncement() {
    this.currentAnnouncement =
      (this.currentAnnouncement + this.announcements.length - 1) % this.announcements.length;
    this.resetInterval();
  }

  nextAnnouncement() {
    this.currentAnnouncement =
      (this.currentAnnouncement + 1) % this.announcements.length;
    this.resetInterval();
  }

  resetInterval() {
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
    }
    this.intervalRef = setInterval(() => {
      this.currentAnnouncement = (this.currentAnnouncement + 1) % this.announcements.length;
    }, 5000);
  }
  

  // sticky nav
  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 80) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}
