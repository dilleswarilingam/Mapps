import { Injectable } from '@angular/core';


@Injectable({
  providedIn:'root'
})
export class AuthService {

  login(username:string,password:string):boolean{

    if(username === 'admin' && password === '1234'){
      localStorage.setItem('loggedIn','true');
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