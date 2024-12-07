import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true; // Permitir acceso si hay un token
    } else {
      this.router.navigate(['/login']); // Redirigir al login si no está autenticado
      return false; // Bloquear acceso
    }
  }
}
