import { Component} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  regForm=new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    gender: new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    country:new FormControl('',Validators.required),
    dob:new FormControl("",Validators.required),
    terms:new FormControl(false,Validators.requiredTrue)
  });

  onSubmit(){
    console.log(this.regForm.value);
    
  }

  reset(){
    this.regForm.reset();
  }
}
