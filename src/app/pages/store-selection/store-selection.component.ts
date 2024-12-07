import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-store-selection',
  templateUrl: './store-selection.component.html',
  styleUrls: ['./store-selection.component.scss']
})
export class StoreSelectionComponent implements OnInit {
  stores: any[] = [];

  constructor(private router: Router, private backendService: BackendService) {}

  ngOnInit(): void {
    this.loadStores();
  }

  loadStores(): void {
    this.backendService.getStores().subscribe(
      data => {
        this.stores = data.tiendas;
        console.log('Tiendas:', this.stores);
      },
      error => {
        console.error('Error al obtener tiendas:', error);
      }
    );
  }

  goToMenu(storeName: string) {
    this.router.navigate(['/menu', storeName]);
  }
}
