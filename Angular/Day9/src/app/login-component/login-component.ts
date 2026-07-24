import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl } from '@angular/forms';
import { RouterOutlet,Router } from '@angular/router';
import { AuthService } from '../services/auth';
@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule, RouterOutlet],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  constructor(private router:Router,public authservive:AuthService){}

  loginform=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  });

  submit(){
    let username=this.loginform.value.username!;
    let password=this.loginform.value.password!;
    let result=this.authservive.login(username,password);
    if(result){
      this.router.navigate(['/dashboard/list']);
    }else{
      alert("Invalid username or password ");
    }
  }
}
