import { Component } from '@angular/core';
import social_links, { ISocial } from '../../data/social-data';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-footer-two',
  templateUrl: './footer-two.component.html',
  styleUrls: ['./footer-two.component.scss']
})
export class FooterTwoComponent {
  public social_links: ISocial[] = social_links;
}
