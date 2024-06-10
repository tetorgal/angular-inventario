
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListaProductosComponent } from '../lista-productos/lista-productos.component';
import { Product } from '../models/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.css']
})
export class EliminarProductoComponent {



  constructor(
    public dialogRef: MatDialogRef<ListaProductosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private formBuilder: FormBuilder
  ) { }
}
