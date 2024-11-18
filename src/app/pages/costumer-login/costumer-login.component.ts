import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-costumer-login',
  templateUrl: './costumer-login.component.html',
  styleUrls: ['./costumer-login.component.scss']
})
export class CostumerLoginComponent {
  email: string = ''; 
  password: string = ''; 

  constructor(private router: Router) {}

  login() {
    if (this.email === 'and.cruz@duocuc.cl' && this.password === '123456') {
      this.email = '';
      this.password = '';
      this.router.navigate(['/store-selection']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

  forgotPassword() {
    this.router.navigate(['/forgot-password']);
  }
}
