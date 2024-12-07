import { Component, OnInit } from '@angular/core'; 
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any = {}; // Almacena los datos del usuario
  currentOrders: any[] = []; // Pedidos actuales del usuario
  previousOrders: any[] = []; // Pedidos anteriores del usuario

  constructor(
    private authService: AuthService,
    private backendService: BackendService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.loadUserProfile(); // Primero carga el perfil del usuario
  }

  loadUserProfile() {
    this.authService.getProfile().subscribe({
      next: (profile: any) => {
        this.user = profile; // Asigna el perfil
        console.log('Perfil cargado:', this.user); // Verifica el perfil
        this.loadUserOrders(); // Cargar pedidos después de cargar el perfil
      },
      error: (error: any) => {
        console.error('Error al cargar el perfil:', error);
        alert('No se pudo cargar el perfil. Inicia sesión nuevamente.');
        this.router.navigate(['/login']);
      }
    });
  }

  loadUserOrders() {
    if (!this.user.rut) {
      console.error('El RUT del usuario no está disponible');
      return;
    }

    this.backendService.getOrdersByUser(this.user.rut).subscribe({
      next: (orders: any[]) => {
        this.currentOrders = orders.filter(order => 
          ['Pendiente', 'En Preparación', 'Listo para Retiro'].includes(order.estado)
        );
        this.previousOrders = orders.filter(order => order.estado === 'Entregado');
        console.log('Pedidos actuales:', this.currentOrders);
        console.log('Pedidos anteriores:', this.previousOrders);
      },
      error: (error: any) => {
        console.error('Error al cargar los pedidos del usuario:', error);
      }
    });
  }

  cancelOrder(orderId: number) {
    this.backendService.updateOrderStatus({ id_pedido: orderId, estado: 'Cancelado' }).subscribe({
      next: () => {
        alert('Pedido cancelado exitosamente.');
        this.loadUserOrders(); // Recargar pedidos después de cancelar
      },
      error: (error: any) => {
        console.error('Error al cancelar el pedido:', error);
      }
    });
  }

  goToMenu() {
    this.location.back();
  }

  goToShoppingCart() {
    this.router.navigate(['/shopping-cart']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }
}
