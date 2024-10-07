// login.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from'src/app/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly API_URL = API_CONFIG.BASE_URL;

  constructor(private http: HttpClient) { }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, credentials);
  }

  checkTokenValidity(): Observable<boolean> {
    const token = localStorage.getItem('access_token');
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      return this.http.get<boolean>(`${this.API_URL}/check-token-validity`, { headers });
    } else {
      return new Observable<boolean>((observer) => observer.next(false));
    }
  }
}
