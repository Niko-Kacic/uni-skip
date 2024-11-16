import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-selection',
  templateUrl: './store-selection.component.html',
  styleUrls: ['./store-selection.component.scss']
})
export class StoreSelectionComponent {

  constructor(private router: Router) {}

  goToMenu(storeId: string) {
    
    this.router.navigate(['/menu', storeId]);
  }
}
