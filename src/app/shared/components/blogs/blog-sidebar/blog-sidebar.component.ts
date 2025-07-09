import { Component } from '@angular/core';
import blog_data from '../../../data/blog-data';
import { UtilsService } from '../../../services/utils.service';
import IBlogType from '../../../types/blog-d-t';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.scss']
})
export class BlogSidebarComponent {

  public recent_blogs: IBlogType[] = [];

  constructor(public utilsService:UtilsService){
    this.utilsService.blogs.subscribe((blogs) => {
      this.recent_blogs = blogs.slice(-3)
    });
  }

}
