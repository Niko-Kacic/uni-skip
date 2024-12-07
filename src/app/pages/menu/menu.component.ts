import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  storeId: string = '';
  storeName: string = '';
  products: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private backendService: BackendService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.storeId = this.route.snapshot.paramMap.get('storeId') || '';
    console.log('Tienda seleccionada:', this.storeId);
    this.loadProducts();
  }

  loadProducts(): void {
    const storeIdNumber = parseInt(this.storeId, 10);
    this.backendService.getProductsByStore(storeIdNumber).subscribe(
      data => {
        console.log('Productos obtenidos desde el servidor:', data.products);
        this.products = data.products;
        if (this.products.length > 0) {
          this.storeName = this.products[0].nombre;
        } else {
          this.storeName = 'Tienda';
        }
      },
      error => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Producto añadido al carrito');
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }

  goToShoppingCart() {
    this.router.navigate(['/shopping-cart']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
