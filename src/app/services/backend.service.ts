import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getStores(): Observable<any> {
    return this.http.get(`${this.baseUrl}/stores`);
  }

  getProductsByStore(storeId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/products/store/${storeId}`);
  }
}