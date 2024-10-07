import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    this.loginError = null;

    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      this.loginService.login(loginData).subscribe({
        next: (response) => {
          console.log('Login exitoso:', response);
          localStorage.setItem('access_token', response.access_token);
          console.log('Redirigiendo a dashboard...');
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error('Login error:', error);
          if (error.status === 401) {
            this.loginError = 'Credenciales incorrectas. Inténtalo de nuevo.';
          } else {
            this.loginError = 'Ocurrió un error inesperado. Inténtalo más tarde.';
          }
        }
      });
    } else {
      console.log('Formulario de login no válido');
    }
  }
}
