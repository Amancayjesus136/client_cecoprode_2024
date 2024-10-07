import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    const token = localStorage.getItem('access_token');
    console.log('Token en AuthGuard:', token);
    if (!token) {
      this.router.navigate(['/login']);
      return of(false);
    }

    return this.authService.validateToken().pipe(
      map(response => {
        console.log('Respuesta de validación del token:', response);
        if (response.valid) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }),
      catchError(error => {
        console.error('Error en la validación del token:', error);
        this.router.navigate(['/login']);
        return of(false);
      })
    );

  }

}
