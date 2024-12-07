import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];
  getCart() {
    return this.cart;
  }

  addToCart(product: any) {
    const existingProduct = this.cart.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity += 1; 
    } else {
      this.cart.push({ ...product, quantity: 1 }); 
    }
  }
  
  removeFromCart(product: any) {
    const existingProduct = this.cart.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity -= 1; 
      if (existingProduct.quantity === 0) {
        this.cart = this.cart.filter(item => item.name !== product.name); 
      }
    }
  }
  
  getTotal() {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}