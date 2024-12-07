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

  // Navegar a la página de bienvenida
  welcomePage() {
    this.router.navigate(['/welcome-page']);
  }

  // Manejar inicio de sesión
  login() {
    const credentials = { email: this.email, password: this.password };
    this.authService.login(credentials).subscribe({
      next: (response: any) => {
        alert('Inicio de sesión exitoso');
        localStorage.setItem('token', response.token); // Guardar token en localStorage

        if (response.isStore) {
          // Si es una tienda, redirigir a la vista de pedidos de tienda
          this.router.navigate(['/store'], { queryParams: { storeId: response.storeId } });
        } else {
          // Si es un usuario normal, redirigir a la selección de tienda
          this.router.navigate(['/store-selection']);
        }
      },
      error: (error: any) => {
        alert('Usuario o contraseña incorrectos');
        console.error(error);
      },
    });
  }

  // Navegar a la página de recuperación de contraseña
  forgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  // Navegar a la página de registro
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
