import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  storeId: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.storeId = this.route.snapshot.paramMap.get('storeId') || '';
    console.log('Tienda seleccionada:', this.storeId);
  }
}
