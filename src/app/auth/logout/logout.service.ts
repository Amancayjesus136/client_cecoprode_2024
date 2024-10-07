import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from'src/app/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  private API_URL = `${API_CONFIG.BASE_URL}/logout`;

  constructor(private http: HttpClient) { }

  logout(): Observable<any> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(this.API_URL, {}, { headers });
  }
}
