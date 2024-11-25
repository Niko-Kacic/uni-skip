import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../service/cart.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  storeId: string = '';
  storeName: string = '';
  products: any[] = []; 
  allProducts = [
    {
      storeId: 'Menu-Castaño',
      storeName: 'Castaño',
      products: [
        { name: 'Galletas', description: 'Galletas de mantequilla recién horneadas.', price: 1500 },
        { name: 'Chaparrita', description: 'Vianesa envuelta en masa horneada con queso.', price: 1200 }
      ]
    },
    {
      storeId: 'Menu-Paradiso Café',
      storeName: 'Paradiso Café',
      products: [
        { name: 'Cruzadito de Chocolate', description: 'Masa de hoja rellena con chocolate.', price: 2500 },
        { name: 'Cruzadito de Crema', description: 'Masa de hoja rellena con crema.', price: 2400 }
      ]
    },
    {
      storeId: 'Menu-Achoclonados',
      storeName: 'Achoclonados',
      products: [
        { name: 'Coca Cola en lata', description: 'Refresco Coca Cola en lata de 350ml.', price: 900 },
        { name: 'Pepsi en lata', description: 'Refresco Pepsi en lata de 350ml.', price: 850 }
      ]
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    
    this.storeId = this.route.snapshot.paramMap.get('storeId') || '';
    console.log('Tienda seleccionada:', this.storeId);

    
    const selectedStore = this.allProducts.find(store => store.storeId === this.storeId);
    if (selectedStore) {
      this.storeName = selectedStore.storeName;
      this.products = selectedStore.products;
    } else {
      console.log('No se encontró la tienda seleccionada.');
    }
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
  }

  
}
