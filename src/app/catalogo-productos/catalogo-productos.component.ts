import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductosService } from '../service/productos.service';
import { CarritoComprasService } from '../service/carrito-compras.service';

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css']
})
export class CatalogoProductosComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productosService: ProductosService,
    private carritoService: CarritoComprasService
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productosService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  addToCarrito(product: Product): void {
    this.carritoService.addToCarrito(product);
  }
}