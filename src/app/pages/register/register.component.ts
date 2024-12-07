import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  passwordMismatch: boolean = false;

  constructor(private router: Router) {}

  ngOnChanges() {
    this.passwordMismatch = this.password !== this.confirmPassword;
  }

  register() {
    if (this.passwordMismatch) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    console.log('Correo:', this.email);
    console.log('Contraseña:', this.password);

    this.router.navigate(['/login']);
  }

  welcomePage() {
    this.router.navigate(['/welcome']); 
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
