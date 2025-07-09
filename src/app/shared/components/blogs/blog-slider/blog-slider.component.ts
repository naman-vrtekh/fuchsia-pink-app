import { Component } from '@angular/core';
import Swiper from 'swiper';
import blog_data from '../../../data/blog-data';
import IBlogType from '../../../types/blog-d-t';
import { CommonModule } from '@angular/common';
import { BlogItemComponent } from '../blog-item/blog-item.component';

@Component({
  standalone: true,
  imports: [CommonModule, BlogItemComponent],
  selector: 'app-blog-slider',
  templateUrl: './blog-slider.component.html',
  styleUrls: ['./blog-slider.component.scss']
})
export class BlogSliderComponent {
  public blogData:IBlogType[] = blog_data.filter(b => b.blog === 'home');

  ngAfterViewInit() {
    // blog slider
    new Swiper('.blog__slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: false,
      breakpoints: {
        '992': {
          slidesPerView: 3,
        },
        '768': {
          slidesPerView: 2,
        },
        '576': {
          slidesPerView: 1,
        },
        '0': {
          slidesPerView: 1,
        },
      },
    })
  }
}
