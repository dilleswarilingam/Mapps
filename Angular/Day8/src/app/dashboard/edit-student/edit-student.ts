import { Component } from '@angular/core';
import {FormGroup,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-edit-student',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './edit-student.html',
  styleUrl: './edit-student.css',
})
export class EditStudent {
  id!:number;
  updateform=new FormGroup({
    name:new FormControl<string>('',[Validators.required]),
    email:new FormControl<string>('',[Validators.required,Validators.email]),
    class:new FormControl<string>('',[Validators.required]),
    department:new FormControl<string>('',[Validators.required]),
    marks:new FormControl<number|null>(null,[Validators.required]),
    gender:new FormControl<string>('',[Validators.required]),
  });


  constructor(private route:ActivatedRoute,public studentservice:StudentService,private router:Router){};

  ngOnInit(){
    this.id=Number(this.route.snapshot.paramMap.get('id'));
    let student=this.studentservice.getDataById(this.id);
    if(student){
      this.updateform.patchValue(student);
    }
  }

  Update(){
    if(this.updateform.invalid){
      this.updateform.markAllAsTouched();
      return;
    }

    let studentData:any={
      id:this.id,
      ...this.updateform.value
    };

    this.studentservice.updateStudent(studentData);
    alert("Form Updated successfully!")
    this.router.navigate(['/dashboard/list']);
  }

 
}
