import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Obtener tiendas
  getStores(): Observable<any> {
    return this.http.get(`${this.baseUrl}/stores`);
  }

  // Obtener productos por tienda
  getProductsByStore(storeId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/products/store/${storeId}`);
  }

  // Obtener pedidos por estado
  getOrdersByStatus(status: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/orders/list-by-status?estado=${status}`);
  }

  // Actualizar estado de un pedido
  updateOrderStatus(orderData: { id_pedido: number; estado: string }): Observable<any> {
    return this.http.put(`${this.baseUrl}/orders/update-status`, orderData);
  }

  // Obtener pedidos por usuario
  getOrdersByUser(rutUsuario: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/orders/user/${rutUsuario}`);
  }

  // Obtener pedidos por tienda y estado
  getOrdersByStoreAndStatus(storeId: number, status: string): Observable<any> {
    const url = `${this.baseUrl}/orders/store-orders?storeId=${storeId}&status=${status}`;
    console.log('URL generada para pedidos:', url); // Log para verificar URL generada
    return this.http.get(url);
  }  
}
