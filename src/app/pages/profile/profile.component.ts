import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any = {}; // Aquí se almacenarán los datos del usuario

  constructor(private authService: AuthService, private router: Router, private location: Location) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.authService.getProfile().subscribe({
      next: (profile: any) => {
        this.user = profile; // Asigna los datos del perfil al objeto user
      },
      error: (error: any) => {
        console.error('Error al cargar el perfil:', error);
        alert('No se pudo cargar el perfil. Inicia sesión nuevamente.');
        this.router.navigate(['/login']);
      }
    });
  }

  goToMenu() {
    this.location.back();
  }

  goToShoppingCart() {
    this.router.navigate(['/shopping-cart']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }
}
