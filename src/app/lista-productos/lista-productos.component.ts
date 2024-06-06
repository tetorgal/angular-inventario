import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../service/productos.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productsList: Product[] = []
  constructor(private productService: ProductosService) {

  }
  ngOnInit(): void {
this.getProduct();
  }
  async getProduct() {
    try {
      this.productService.getProducts()
        .subscribe(item => this.productsList = item)
    }
    catch (error) {
      console.log(error)
    }
  }
}
