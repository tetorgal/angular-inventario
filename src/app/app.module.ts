import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { provideClientHydration } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormProductosComponent } from './form-productos/form-productos.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    ProductosComponent,
    ListaProductosComponent,
    FormProductosComponent,
    EliminarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    HttpClientModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    CommonModule,
    MatInputModule,
    MatDialogModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
