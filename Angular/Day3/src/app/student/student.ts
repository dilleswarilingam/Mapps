import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  standalone:true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  fname:string="navya";
  myage:number=21;
  picture:string="favicon.ico";

  username:string="";

  content:string="";
  checked:boolean=true;
  today=new Date();

  students=[
    {sname:"navya",marks:70 },
    {sname:"abhi",marks:63},
    {sname:"prabhash",marks:71},
    {sname:"balaji",marks:34}
  ]

  showContent(){
    this.content="The mouse is over the button";
  }
  hideContent(){
    this.content="";
  }
  changeColor(){
    if(this.checked){
      this.checked=false;
    }else{
      this.checked=true;
    }

  }
}
