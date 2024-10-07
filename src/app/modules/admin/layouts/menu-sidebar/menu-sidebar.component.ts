import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from 'src/app/auth/logout/logout.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.css']
})
export class MenuSidebarComponent implements OnInit {

  constructor(
    private logoutService: LogoutService,
    private router: Router,
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    this.checkAuthentication();

    if (isPlatformBrowser(this.platformId)) {
      import('flowbite').then((module) => {
        module.initFlowbite();
        this.initThemeToggle();
      });
    }
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

  initThemeToggle() {
    if (localStorage.getItem('color-theme') === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      themeToggleLightIcon?.classList.remove('hidden');
    } else {
      themeToggleDarkIcon?.classList.remove('hidden');
    }

    const themeToggleBtn = document.getElementById('theme-toggle');

    themeToggleBtn?.addEventListener('click', () => {
      themeToggleDarkIcon?.classList.toggle('hidden');
      themeToggleLightIcon?.classList.toggle('hidden');

      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
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
