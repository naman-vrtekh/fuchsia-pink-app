import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() data: any[] = [];
  @Input() paginate: any = {};

  @Output() setPage: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  pageSet(page: number) {
    this.setPage.emit(page); // Set Page Number
  }

}
