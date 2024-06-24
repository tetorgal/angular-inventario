import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { CatalogoProductosComponent } from './catalogo-productos/catalogo-productos.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ListaProductosComponent },
  { path: 'usuarios', component: ListaUsuariosComponent },
  { path: 'catalogo', component: CatalogoProductosComponent },
  { path: '**', redirectTo: '/inicio' }  // Ruta comodín para URLs no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }