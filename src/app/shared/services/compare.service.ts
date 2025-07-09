import { Injectable } from '@angular/core';
import { SafeToastrService } from './safe-toastr.service';
import { IProduct } from '../types/product-d-t';


const state = {
  compare_items: JSON.parse(localStorage['compare_products'] || '[]')
}

@Injectable({
  providedIn: 'root'
})


export class CompareService {

  public getCompareProducts() {
    return state.compare_items;
  }

  constructor(private safeToastr: SafeToastrService) { }

  // add_compare_product
  add_compare_product(payload: IProduct) {
    const isAdded = state.compare_items.findIndex((p: IProduct) => p.id === payload.id);
    if (isAdded !== -1) {
      state.compare_items = state.compare_items.filter((p: IProduct) => p.id !== payload.id);
      this.safeToastr.error(`${payload.title} remove to compare`);
    } else {
      state.compare_items.push(payload);
      this.safeToastr.success(`${payload.title} added to compare`);
    }
    localStorage.setItem("compare_products", JSON.stringify(state.compare_items));
  };
  // remove compare
  removeCompare(payload: IProduct) {
    state.compare_items = state.compare_items.filter((p: IProduct) => p.id !== payload.id);
    this.safeToastr.error(`${payload.title} remove to compare`);
    localStorage.setItem("compare_products", JSON.stringify(state.compare_items));
  };
}
