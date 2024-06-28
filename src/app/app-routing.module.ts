import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { CatalogoProductosComponent } from './catalogo-productos/catalogo-productos.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ListaProductosComponent, canActivate: [AuthGuard] },
  { path: 'usuarios', component: ListaUsuariosComponent, canActivate: [AuthGuard] },
  { path: 'catalogo', component: CatalogoProductosComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }