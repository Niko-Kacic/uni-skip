import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  getCart() {
    return this.cart;
  }

  // Agregar producto al carrito
  addToCart(product: any) {
    const existingProduct = this.cart.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity += 1; // Aumenta la cantidad si ya está en el carrito
    } else {
      this.cart.push({ ...product, quantity: 1 }); // Agrega el producto con cantidad 1
    }
  }

  // Quitar producto del carrito
  removeFromCart(product: any) {
    const existingProduct = this.cart.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity -= 1; // Reduce la cantidad
      if (existingProduct.quantity === 0) {
        this.cart = this.cart.filter(item => item.name !== product.name); // Elimina si la cantidad es 0
      }
    }
  }

  // Calcular el total del carrito
  getTotal() {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}
