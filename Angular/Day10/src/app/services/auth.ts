import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private username:string="admin";
  private password:string="12345";
  loggedIn:boolean=false;

  login(username:string,password:string){
    if(this.username===username && this.password===password){
      this.loggedIn=true;
      // localStorage.setItem("loggedIn","true");
      return true;
    }
    return false;
  }

  isLogged():boolean {
      return this.loggedIn;
      // return localStorage.getItem("loggedIn")==="true";
  }

  // logout(){

  //   localStorage.removeItem('loggedIn');

  // }
 
}

