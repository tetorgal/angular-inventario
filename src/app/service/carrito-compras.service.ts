import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {
  private carritoItems = new BehaviorSubject<Product[]>([]);
  private total = new BehaviorSubject<number>(0);

  constructor() { }

  getCarritoItems() {
    return this.carritoItems.asObservable();
  }

  getTotal() {
    return this.total.asObservable();
  }

  addToCarrito(product: Product) {
    const currentItems = this.carritoItems.value;
    const existingItem = currentItems.find(item => item._id === product._id);
    
    if (existingItem) {
      existingItem.amount = (existingItem.amount || 1) + 1;
    } else {
      currentItems.push({ ...product, amount: 1 });
    }

    this.carritoItems.next(currentItems);
    this.updateTotal();
  }

  removeFromCarrito(product: Product) {
    const currentItems = this.carritoItems.value;
    const updatedItems = currentItems.filter(item => item._id !== product._id);
    this.carritoItems.next(updatedItems);
    this.updateTotal();
  }

  private updateTotal() {
    const total = this.carritoItems.value.reduce((sum, item) => 
      sum + (item.price * (item.amount || 1)), 0);
    this.total.next(total);
  }
}