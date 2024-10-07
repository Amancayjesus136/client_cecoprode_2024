import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_CONFIG } from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = API_CONFIG.BASE_URL;

  constructor(private http: HttpClient) { }

  validateToken(): Observable<any> {
    const token = localStorage.getItem('access_token');
    if (!token) {
      return throwError('Token not found');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get(`${this.apiUrl}/validate_token`, { headers }).pipe(
      catchError(error => {
        console.error('Error al validar el token:', error);
        return throwError(error);
      })
    );
  }
}
