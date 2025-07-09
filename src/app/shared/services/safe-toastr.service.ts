import { Injectable, Inject, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class SafeToastrService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  private get toastr(): ToastrService | null {
    return this.isBrowser ? inject(ToastrService) : null;
  }

  success(message: string, title?: string) {
    this.toastr?.success(message, title);
  }

  error(message: string, title?: string) {
    this.toastr?.error(message, title);
  }

  info(message: string, title?: string) {
    this.toastr?.info(message, title);
  }

  warning(message: string, title?: string) {
    this.toastr?.warning(message, title);
  }
}
