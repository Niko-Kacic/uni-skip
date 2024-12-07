import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  orders: any[] = []; // Lista de pedidos
  currentStatus: string = 'Pendiente'; // Estado inicial de los pedidos
  storeId: number = 0; // ID de la tienda actual

  constructor(
    private backendService: BackendService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute // Para obtener parámetros de la URL
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log('Parámetros recibidos:', params); // Verifica que el parámetro storeId sea el esperado
      this.storeId = +params['storeId'];
      console.log('Store ID procesado:', this.storeId); // Confirma que storeId sea numérico
      this.loadOrders();
    });
  }
  
  loadOrders(): void {
    console.log('Estado actual:', this.currentStatus); // Verifica el estado actual
    this.backendService.getOrdersByStoreAndStatus(this.storeId, this.currentStatus).subscribe(
      data => {
        this.orders = data.pedidos;
        console.log('Pedidos cargados desde el backend:', this.orders); // Verifica los pedidos obtenidos
      },
      error => {
        console.error('Error al cargar pedidos:', error);
      }
    );
  }  

  // Actualizar estado de un pedido
  updateOrderStatus(orderId: number, status: string): void {
    this.backendService.updateOrderStatus({ id_pedido: orderId, estado: status }).subscribe(
      response => {
        console.log('Estado actualizado:', response);
        this.loadOrders(); // Recargar pedidos después de actualizar
      },
      error => {
        console.error('Error al actualizar estado:', error);
      }
    );
  }

  // Cerrar sesión
  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        alert('Sesión cerrada exitosamente');
        localStorage.removeItem('token'); // Eliminar token del localStorage
        this.router.navigate(['/welcome-page']); // Redirigir a la página de bienvenida
      },
      error: error => {
        console.error('Error al cerrar sesión:', error);
      }
    });
  }
}
