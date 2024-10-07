import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from 'src/app/auth/logout/logout.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private logoutService: LogoutService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.checkAuthentication();
  }

  checkAuthentication(): void {
    const token = localStorage.getItem('access_token');
    if (!token) {
      console.log('No se encontró token, redirigiendo al login');
      this.router.navigate(['/login']);
      return;
    }

    console.log('Token encontrado:', token);

    this.authService.validateToken().subscribe({
      next: (response) => {
        if (response.valid) {
          console.log('Usuario autenticado');
          console.log('Token válido:', token);
          console.log('Información del usuario:', response);
        } else {
          console.error('Token inválido o expirado:', response);
          this.handleInvalidToken();
        }
      },
      error: (error) => {
        console.error('Error al validar el token:', error);
        this.handleInvalidToken();
      }
    });
  }

  onLogout(): void {
    this.logoutService.logout().subscribe({
      next: () => {
        console.log('Logout exitoso, eliminando token');
        localStorage.removeItem('access_token');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Error durante el logout:', error);
        localStorage.removeItem('access_token');
        this.router.navigate(['/login']);
      }
    });
  }

  private handleInvalidToken(): void {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }

  private handleLogout(): void {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }
}
