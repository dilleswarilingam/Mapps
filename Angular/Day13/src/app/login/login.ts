import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormGroup,FormControl,Validators,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
   loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private service: AuthService,
    private router: Router
  ) {}

  login() {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const username = this.loginForm.value.username ??'' ;
    const password = this.loginForm.value.password ?? '';

    const result = this.service.login(username, password);

    if (result) {
      this.router.navigate(['/employee/dashboard']);
    } else {
      alert('Incorrect username or password!');
    }

  }

}
