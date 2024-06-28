import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('AuthGuard: isAuthenticatedUser:', this.authService.isAuthenticatedUser());
    
    if (this.authService.isAuthenticatedUser()) {
      // Si el usuario está autenticado, permite la navegación
      return true;
    } else {
      // Si el usuario no está autenticado, redirige al inicio
      console.log('Usuario no autenticado, redirigiendo al inicio');
      return this.router.createUrlTree(['/inicio']);
    }
  }
}