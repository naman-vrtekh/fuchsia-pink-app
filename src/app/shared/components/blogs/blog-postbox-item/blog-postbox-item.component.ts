import { Component, Input } from '@angular/core';
import IBlogType from '../../../types/blog-d-t';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule ,RouterModule],
  selector: 'app-blog-postbox-item',
  templateUrl: './blog-postbox-item.component.html',
  styleUrls: ['./blog-postbox-item.component.scss'],
})
export class BlogPostboxItemComponent {
  @Input() blog!: IBlogType;
  @Input() cls?: string;
  @Input() title_cls: boolean = true;

  getClass() {
    let dynamicClass = '';
    if (this.cls) {
      dynamicClass = this.cls;
    } else {
      dynamicClass = 'blog__border-bottom mb-30 pb-60';
    }
    return dynamicClass;
  }
}
