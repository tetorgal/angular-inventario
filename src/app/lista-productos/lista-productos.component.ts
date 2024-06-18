import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../service/productos.service';
import { Product } from '../models/product';
import { MatTableDataSource } from '@angular/material/table';
import { FormProductosComponent } from '../form-productos/form-productos.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarEliminarComponent } from '../confirmar-eliminar/confirmar-eliminar.component';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  filterValue: string = '';
  productsList: Product[] = []
  columnsHeader=["date","name","price","amount","status","opciones"]
  dataSource = new MatTableDataSource<Product>(this.productsList);
  constructor(private productService: ProductosService, private dialog: MatDialog) { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  };

  ngOnInit(): void {
    this.getProduct();
  }

  async getProduct() {
    try {
      this.productService.getProducts()
        .subscribe(items => {
          this.productsList = items;
          this.dataSource.data = this.productsList; // Actualizar la fuente de datos
        });
    } catch (error) {
      console.log(error);
    }
  }

  productListMethod() {
    try {
      this.productService.getProducts()
        .subscribe(items => {
          this.productsList = items;
          this.dataSource.data = this.productsList; // Actualizar la fuente de datos
        });
    } catch (error) {
      console.log(error);
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormProductosComponent, {
      data: null,
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      if (result) {
        this.productListMethod(); // o this.getProduct();
      }
    });
  }

  deleteDialog(id: string) {
    const dialogRef = this.dialog.open(ConfirmarEliminarComponent, {
      data: null,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      if (result) {
        this.deleteProduct(id)
      }
    });
  }

  deleteProduct(id: string) {
    try {
      this.productService.delete(id).subscribe(item => console.log(item))
      this.productListMethod();

    } catch (error) {

    }
  }

  editDialog(product: Product) {
    const dialogRef = this.dialog.open(FormProductosComponent, {
      data: product, // Asegúrate de que esto incluya el _id
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productListMethod(); 
      }
    });
  }

}