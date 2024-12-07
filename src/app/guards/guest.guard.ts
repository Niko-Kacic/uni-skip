import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GuestGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/store-selection']); // Redirigir a una vista para autenticados
      return false; // Bloquear acceso
    } else {
      return true; // Permitir acceso si no hay token
    }
  }
}
