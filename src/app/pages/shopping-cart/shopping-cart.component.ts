import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  cart: any[] = [];
  rut_usuario: number = 12345678; // Ejemplo de rut de usuario, ajustar según sea necesario

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

  checkout() {
    this.cartService.checkout(this.rut_usuario).subscribe(
      response => {
        console.log('Pedido confirmado:', response);
        alert('Pedido confirmado exitosamente');
        this.cart = []; // Vaciar el carrito después del checkout
      },
      error => {
        console.error('Error al confirmar el pedido:', error);
      }
    );
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
