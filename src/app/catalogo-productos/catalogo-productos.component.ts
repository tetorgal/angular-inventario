import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductosService } from '../service/productos.service';

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css']
})
export class CatalogoProductosComponent implements OnInit{
  products: Product[] = [];
  selectedProduct: Product | null = null;

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productosService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }
}
