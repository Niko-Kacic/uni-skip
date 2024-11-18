import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  email: string = ''; 

  constructor(private router: Router) {}

  reset() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@duocuc\.cl$/;

    if (!emailPattern.test(this.email)) {
      alert('Por favor ingresa un correo institucional válido (termina en @duocuc.cl)');
      return;
    }

    if (this.email === 'and.cruz@duocuc.cl') {
      alert('Correo de recuperación enviado. Revisa tu bandeja de entrada.');
      this.email = '';
      this.router.navigate(['/login']);
    } else {
      alert('Correo no registrado.');
    }
  }
}
