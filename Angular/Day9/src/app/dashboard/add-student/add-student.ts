import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentService } from '../../services/student';
import { StudentModel } from '../../Models/student-model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-student',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css',
})
export class AddStudent {

  constructor(public studentservice:StudentService,private router:Router){}


  
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

    const studentmodel:StudentModel={
    id:Date.now(),
    name:this.loginform.value.name!,
    email:this.loginform.value.email!,
    class:this.loginform.value.class!,
    department:this.loginform.value.department!,
    marks:Number(this.loginform.value.marks),
    gender:this.loginform.value.gender!

  }

  this.studentservice.addStudent(studentmodel);
  console.log(studentmodel);
  alert("Form submitted successfully!")
  this.router.navigate(['/dashboard/list'])
  
  }
  Reset(){
    this.loginform.reset();
  }
}
