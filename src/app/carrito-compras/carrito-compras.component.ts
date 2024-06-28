import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { CarritoComprasService } from '../service/carrito-compras.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
  carritoItems$!: Observable<Product[]>;
  total$!: Observable<number>;

  constructor(private carritoService: CarritoComprasService) { }

  ngOnInit(): void {
    this.carritoItems$ = this.carritoService.getCarritoItems();
    this.total$ = this.carritoService.getTotal();
  }

  removeItem(product: Product) {
    this.carritoService.removeFromCarrito(product);
  }
}