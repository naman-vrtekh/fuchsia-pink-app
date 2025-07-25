import { Injectable } from '@angular/core';
import { SafeToastrService } from './safe-toastr.service';
import { IProduct } from '../types/product-d-t';

const state = {
  wishlists: JSON.parse(localStorage['wishlist_products'] || '[]')
}

@Injectable({
  providedIn: 'root'
})


export class WishlistService {

  constructor(private safeToastr: SafeToastrService) { }

  public getWishlistProducts() {
    return state.wishlists;
  }

  // add_wishlist_product
  add_wishlist_product(payload: IProduct) {
    const isAdded = state.wishlists.findIndex((p: IProduct) => p.id === payload.id);
    if (isAdded !== -1) {
      state.wishlists = state.wishlists.filter((p: IProduct) => p.id !== payload.id);
      this.safeToastr.error(`${payload.title} remove to wishlist`);
    } else {
      state.wishlists.push(payload);
      this.safeToastr.success(`${payload.title} added to wishlist`);
    }
    localStorage.setItem("wishlist_products", JSON.stringify(state.wishlists));
  };
  // removeWishlist
  removeWishlist(payload: IProduct) {
    state.wishlists = state.wishlists.filter((p: IProduct) => p.id !== payload.id);
    this.safeToastr.error(`${payload.title} remove to wishlist`);
    localStorage.setItem("wishlist_products", JSON.stringify(state.wishlists));
  };
}
