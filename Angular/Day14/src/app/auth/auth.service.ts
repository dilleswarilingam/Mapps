import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn:'root'
})
export class AuthService {


  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('loggedIn', 'true');
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem( 'loggedIn');
  }

  isLoggedIn():boolean{
    return localStorage.getItem('loggedIn') === 'true';
  }


}
















/*constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(
      'https://dummyjson.com/auth/login',
      {
        username,
        password
      }
    );
  }*/