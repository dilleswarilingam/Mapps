import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(public service:AuthService,private router:Router){}
  username:string='';
  password:string='';
  login(){
    const result=this.service.login(this.username,this.password);
    if(result){
      this.router.navigate(['/employee/dashboard']);
    }else{
      alert("Incorrect username or password!")
    }
  }
}
