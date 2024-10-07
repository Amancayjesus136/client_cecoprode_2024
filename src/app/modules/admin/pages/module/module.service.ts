import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Module } from 'src/app/models/admin/module/module.models';
import { API_CONFIG } from 'src/app/config/api.config';
import { ApiResponse } from 'src/app/models/admin/module/response.model';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private readonly API_URL = API_CONFIG.BASE_URL;

  constructor(private http: HttpClient) {}

  // Obtener información por ID
  getInformationById(id: number): Observable<Module> {
    return this.http.get<Module>(`${this.API_URL}/information/list/${id}`);
  }

  createInformation(data: FormData): Observable<Module> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<Module>(`${this.API_URL}/information/store`, data, { headers });
  }

  getAllInformation(): Observable<ApiResponse<Module>> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<ApiResponse<Module>>(`${this.API_URL}/information/list`, { headers });
  }

  getLatestInformation(): Observable<ApiResponse<Module>> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<ApiResponse<Module>>(`${this.API_URL}/information/latest`, { headers });
  }

}
