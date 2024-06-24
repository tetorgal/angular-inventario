import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service'; // Ajusta la ruta según tu estructura de archivos
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('El formulario es valido.');
      this.onLogin();
    } else {
      console.log('El formulario es invalido.');
    }
  }

  onLogin() {
    const login = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    };

    console.log('Login data:', login);

    this.authService.login(login).subscribe({
      next: (response) => {
        console.log('Respuesta de login:', response);
        if (response && response.token) {
          console.log('Token:', response.token);

        } else {
          console.error('No se recibio token en la respuesta.');
        }
      },
      error: (err) => {
        console.error('Login failed', err);
        if (err.status === 400) {
          this.errorMessage = 'Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.';
        } else {
          this.errorMessage = 'Ha ocurrido un error. Por favor, inténtelo de nuevo más tarde.';
        }
      }
    });
  }
}
