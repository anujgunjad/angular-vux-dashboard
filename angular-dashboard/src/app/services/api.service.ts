import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getSidebarMenu() {
    return this.http.get<any>(
      'https://api.jsonbin.io/b/623022e07caf5d6783694c1a/1'
    );
  }
}
