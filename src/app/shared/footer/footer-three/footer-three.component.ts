import { Component } from '@angular/core';
import social_links, { ISocial } from '../../data/social-data';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-footer-three',
  templateUrl: './footer-three.component.html',
  styleUrls: ['./footer-three.component.scss']
})
export class FooterThreeComponent {
  public social_links: ISocial[] = social_links;
}
