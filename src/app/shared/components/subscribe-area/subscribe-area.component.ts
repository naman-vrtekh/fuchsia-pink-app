import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-subscribe-area',
  templateUrl: './subscribe-area.component.html',
  styleUrls: ['./subscribe-area.component.scss']
})
export class SubscribeAreaComponent {

  @Input() style_2: boolean = false;
  @Input() style_3: boolean = false;
  inputVal: string = '';

  handleFormSubmit() {

  }
}
