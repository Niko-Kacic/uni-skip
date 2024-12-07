import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor(private router: Router, private location: Location) {
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
