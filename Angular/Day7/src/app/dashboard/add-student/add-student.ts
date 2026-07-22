import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Student } from '../../services/student';
@Component({
  selector: 'app-add-student',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css',
})
export class AddStudent {

  constructor(public studentservice:Student){}

  loginform=new FormGroup({
    
    name:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    class:new FormControl('',Validators.required),
    department:new FormControl('',Validators.required),
    marks:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required)
  })
  saveData(){
    if(this.loginform.invalid){
      this.loginform.markAllAsTouched();
      return;
    }

    this.studentservice.addStudent(this.loginform.value);
    console.log(this.loginform.value);
    alert("Form submitted successfully!")
    this.loginform.reset();

    
  }
  Reset(){
    this.loginform.reset();
  }
}
