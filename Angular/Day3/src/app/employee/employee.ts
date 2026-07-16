import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-employee',
  standalone:true,
  imports: [FormsModule,CurrencyPipe],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  Logged:boolean=true;
  username:string="";
  message:string="";
  check:boolean=false;
  cliqed:boolean=false;
  manage:string="";
  CheckBox(){
    if(this.cliqed){
      this.cliqed=true;
    }else{
      this.cliqed=false;
    }
  }

  employeeDetails:any[]=[
    {
      ename:"Navya",
      age:21,
      salary:25000
    },
    {
      ename:"Abhi",
      age:20,
      salary:24000
    },
    {
      ename:"Prabhash",
      age:22,
      salary:26000
    }
  ];
  checkLength(){
    this.message=this.username.length<=5?"The username must be more than 5 characters!":"Welcome"+" "+this.username;
    if(this.username.length<=5){
      this.check=true;
    }else{
      this.check=false;
    }
    
  }

  display(value:string){
    this.manage=this.manage===""?`Value from events:${value}`:"";
  }

}
