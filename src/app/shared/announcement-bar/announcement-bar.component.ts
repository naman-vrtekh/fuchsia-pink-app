import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-announcement-bar',
  templateUrl: './announcement-bar.component.html',
  styleUrls: ['./announcement-bar.component.scss']
})
export class AnnouncementBarComponent implements OnInit, OnDestroy {
  announcements = [
    "Get 15-20% discount on selected styles! 🛒",
    "Threads of love",
    "7 day return & exchange"
  ];
  currentAnnouncement = 0;
  private intervalRef: any;

  ngOnInit() {
    this.intervalRef = setInterval(() => {
      this.currentAnnouncement = (this.currentAnnouncement + 1) % this.announcements.length;
    }, 5000);
  }

  ngOnDestroy() {
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
    }
  }

  prevAnnouncement() {
    this.currentAnnouncement =
      (this.currentAnnouncement + this.announcements.length - 1) % this.announcements.length;
    this.resetInterval();
  }

  nextAnnouncement() {
    this.currentAnnouncement =
      (this.currentAnnouncement + 1) % this.announcements.length;
    this.resetInterval();
  }

  resetInterval() {
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
    }
    this.intervalRef = setInterval(() => {
      this.currentAnnouncement = (this.currentAnnouncement + 1) % this.announcements.length;
    }, 5000);
  }
}
