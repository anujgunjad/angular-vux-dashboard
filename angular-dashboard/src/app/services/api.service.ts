import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getSidebarMenu() {
    return this.http.get<any>('http://localhost:3000/sideBarMenu');
  }
}
