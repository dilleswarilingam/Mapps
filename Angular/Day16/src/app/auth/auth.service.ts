import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(username: string, password: string): boolean {

    if (username === 'admin' && password === '1234') {

      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('token', 'my-demo-token');

      return true;
    }

    return false;
  }

  getEmployees() {
    return this.http.get('http://localhost:3000/employeesDetails');
  }

  logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }
}


