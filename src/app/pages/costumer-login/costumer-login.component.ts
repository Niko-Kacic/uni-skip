import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-costumer-login',
  templateUrl: './costumer-login.component.html',
  styleUrls: ['./costumer-login.component.scss']
})
export class CostumerLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  welcomePage() {
    this.router.navigate(['/welcome-page']);
  }

  login() {
    const credentials = { email: this.email, password: this.password };
    this.authService.login(credentials).subscribe({
      next: (response: any) => {
        alert('Inicio de sesión exitoso');
        localStorage.setItem('token', response.token); // Guardar token en localStorage
        this.router.navigate(['/store-selection']); // Redirigir a la selección de tienda
      },
      error: (error: any) => {
        alert('Usuario o contraseña incorrectos');
        console.error(error);
      },
    });
  }

  forgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
