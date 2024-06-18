import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListaProductosComponent } from '../lista-productos/lista-productos.component';
import { Product } from '../models/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from '../service/productos.service';

@Component({
  selector: 'app-form-productos',
  templateUrl: './form-productos.component.html',
  styleUrls: ['./form-productos.component.css']
})
export class FormProductosComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ListaProductosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private formBuilder: FormBuilder,
    private productService: ProductosService,
  ) {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      amount: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.formGroup.patchValue(this.data);
    }
  }

  save(): void {
    if (this.formGroup.valid) {
      const productData = this.formGroup.value;
      
      if (this.data && this.data._id) {
        // Cambiamos _id por id para que coincida con el formato de usuarios
        productData.id = this.data._id;
        
        this.productService.editProduct(productData).subscribe(
          response => {
            console.log('Producto actualizado', response);
            this.dialogRef.close(true);
          },
          error => {
            console.error('Error al actualizar el producto', error);
          }
        );
      } else {
        // Si estamos creando un nuevo producto
        this.productService.addProduct(productData).subscribe(
          response => {
            console.log('Producto agregado', response);
            this.dialogRef.close(true);
          },
          error => {
            console.error('Error al agregar el producto', error);
          }
        );
      }
    }
  }
}