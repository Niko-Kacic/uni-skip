import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  // Registrar usuario
  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  // Iniciar sesión
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  // Cerrar sesión
  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, {});
  }

  // Obtener perfil del usuario
  getProfile(): Observable<any> {
    const token = localStorage.getItem('token'); // Recuperar el token almacenado
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(`${this.baseUrl}/profile`, { headers });
  }
}
