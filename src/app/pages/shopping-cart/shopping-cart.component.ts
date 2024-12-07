import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  cart: any[] = [];
  constructor(private cartService: CartService, private router: Router, private location: Location) {
    this.cart = this.cartService.getCart();
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
  }
  getTotal() {
    return this.cartService.getTotal();
  }

  goToMenu() {
    this.location.back();
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
