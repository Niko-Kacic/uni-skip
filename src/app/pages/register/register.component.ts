import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user = {
    rut: '',
    dv_rut: '',
    nombre: '',
    apellido: '',
    email: '',
    password: '',
  };
  confirmPassword = '';
  passwordMismatch = false;

  constructor(private authService: AuthService, private router: Router) {}

  validatePasswords() {
    this.passwordMismatch = this.user.password !== this.confirmPassword;
  }

  register() {
    this.validatePasswords();
    if (this.passwordMismatch) {
      alert('Las contraseñas no coinciden');
      return;
    }

    this.authService.register(this.user).subscribe({
      next: (response: any) => {
        alert('Registro exitoso');
        this.router.navigate(['/costumer-login']);
      },
      error: (error: any) => {
        alert('Error en el registro: ' + error.error.message);
        console.error(error);
      },
    });
  }

  navigateToLogin() {
    this.router.navigate(['/costumer-login']);
  }

  welcomePage() {
    this.router.navigate(['/welcome-page']);
  }
}
