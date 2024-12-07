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
    const existingProduct = this.cart.find(item => item.id_producto === product.id_producto);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      // Asegurarse de que las propiedades esenciales del producto se copien correctamente
      this.cart.push({
        id_producto: product.id_producto,
        nombre: product.nombre,
        valor: product.valor,
        id_tienda: product.id_tienda,
        es_frio: product.es_frio || false,
        es_preparado: product.es_preparado || false,
        quantity: 1 // Cantidad inicial
      });
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
      calentar: product.es_frio || false, // Basado en si el producto es frío
      cantidad: product.quantity,
      valor: product.valor * product.quantity, // Precio total
      estado: 'Pendiente',
      rut_usuario: rut_usuario,
      id_producto: product.id_producto,
      id_tienda: product.id_tienda,
      id_pago: null // Se actualiza más adelante
    }));
  
    return this.http.post(`${this.baseUrl}/orders/confirm`, { orders });
  }  
}
