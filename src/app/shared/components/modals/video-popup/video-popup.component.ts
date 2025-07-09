import { Component } from '@angular/core';
import { UtilsService } from '../../../services/utils.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-video-popup',
  templateUrl: './video-popup.component.html',
  styleUrls: ['./video-popup.component.scss']
})
export class VideoPopupComponent {

  constructor(public utilsService: UtilsService){}

}
