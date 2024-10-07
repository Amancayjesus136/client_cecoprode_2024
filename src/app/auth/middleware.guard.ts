import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MiddlewareGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.validateToken().pipe(
      map(response => {
        return true;
      }),
      catchError(error => {
        console.error('Error en la validación del token:', error);
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}
