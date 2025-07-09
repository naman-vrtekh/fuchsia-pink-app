import { Component, Input } from '@angular/core';
import social_links, { ISocial } from '../../data/social-data';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-footer-one',
  templateUrl: './footer-one.component.html',
  styleUrls: ['./footer-one.component.scss']
})
export class FooterOneComponent {
  @Input() box_style: Boolean = false;
  public social_links: ISocial[] = social_links;
}
