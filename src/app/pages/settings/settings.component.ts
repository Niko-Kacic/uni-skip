import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
    private location: Location
  ) {}

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        localStorage.removeItem('token'); // Limpia el token
        this.router.navigate(['/login']); // Redirige al login
        alert('Sesión cerrada exitosamente');
      },
      error: (error: any) => {
        console.error('Error al cerrar sesión:', error);
        alert('No se pudo cerrar la sesión. Inténtalo de nuevo.');
      },
    });
  }

  goToMenu() {
    this.location.back();
  }

  goToShoppingCart() {
    this.router.navigate(['/shopping-cart']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
