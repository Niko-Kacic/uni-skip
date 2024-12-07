import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getCart() {
    return this.cart;
  }

  addToCart(product: any) {
    const existingProduct = this.cart.find(item => item.nombre === product.nombre);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  removeFromCart(product: any) {
    const existingProduct = this.cart.find(item => item.nombre === product.nombre);
    if (existingProduct) {
      existingProduct.quantity -= 1;
      if (existingProduct.quantity === 0) {
        this.cart = this.cart.filter(item => item.nombre !== product.nombre);
      }
    }
  }

  getTotal() {
    return this.cart.reduce((sum, item) => sum + item.valor * item.quantity, 0);
  }

  checkout(rut_usuario: number): Observable<any> {
    const orders = this.cart.map(product => ({
      hora_pedido: new Date().toISOString(),
      hora_entrega: new Date(Date.now() + 30 * 60 * 1000).toISOString(), // 30 minutos después
      calentar: product.calentar || false,
      cantidad: product.quantity,
      valor: product.valor * product.quantity,
      estado: 'Pendiente',
      rut_usuario: rut_usuario,
      id_producto: product.id_producto,
      id_tienda: product.id_tienda,
      id_pago: null // Se puede actualizar más tarde
    }));
    return this.http.post(`${this.baseUrl}/orders/confirm`, { orders });
  }
}
