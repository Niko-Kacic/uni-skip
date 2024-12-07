import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  constructor(private router: Router, private location: Location) {
  }

  logout() {
    this.router.navigate(['/login']);
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
