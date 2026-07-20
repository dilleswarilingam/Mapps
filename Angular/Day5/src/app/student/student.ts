import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from '../test-pipe';
import { CapitalizePipe } from '../capitalize-pipe';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-student',
  standalone:true,
  imports: [TestPipe,CommonModule,CapitalizePipe,FormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  wish:string="good morning!";
  products:any={
    name:"",
    age:null
  };
  students=[
    {name:"navya",gender:"Female",age:21},
    {name:"abhi",gender:"Female",age:20},
    {name:"prabhash",gender:"Male",age:22}
  ];

  save(){
    alert("Form submitted successfully!")
  }
}
