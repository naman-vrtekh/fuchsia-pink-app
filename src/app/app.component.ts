import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderOneComponent } from './shared/header/header-one/header-one.component';
import { AnnouncementBarComponent } from './shared/announcement-bar/announcement-bar.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderOneComponent, AnnouncementBarComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public router: Router) {}

  hideHeader(): boolean {
    return this.router.url.includes('/login');
  }
}
