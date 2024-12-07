import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  cart: any[] = [];
  rut_usuario: number = 0; // Inicializado en 0 hasta que se obtenga

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router,
    private location: Location
  ) {
    this.cart = this.cartService.getCart();
  }

  ngOnInit(): void {
    this.loadUserRut();
  }

  loadUserRut(): void {
    this.authService.getProfile().subscribe({
      next: (profile: any) => {
        this.rut_usuario = profile.rut; // Obtiene el rut del usuario logueado
      },
      error: (error: any) => {
        console.error('Error al obtener el perfil del usuario:', error);
        alert('No se pudo obtener la información del usuario. Por favor, inicie sesión nuevamente.');
        this.router.navigate(['/login']); // Redirigir al login si hay error
      }
    });
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
    if (!this.rut_usuario) {
      alert('No se puede confirmar el pedido sin un usuario logueado.');
      return;
    }

    this.cartService.checkout(this.rut_usuario).subscribe({
      next: (response: any) => {
        console.log('Pedido confirmado:', response);
        alert('Pedido confirmado exitosamente');
        this.cart = []; // Vaciar el carrito después del checkout
      },
      error: (error: any) => {
        console.error('Error al confirmar el pedido:', error);
      }
    });
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
