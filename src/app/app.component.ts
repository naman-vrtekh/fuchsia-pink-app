import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderOneComponent } from './shared/header/header-one/header-one.component'; // ✅ Correct path

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderOneComponent], // ✅ Import header
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(public router: Router) {}

  hideHeader(): boolean {
    return this.router.url.includes('/login');
  }
}
