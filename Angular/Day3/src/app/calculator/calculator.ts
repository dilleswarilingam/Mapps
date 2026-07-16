import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-calculator',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  num1:number=0;
  num2:number=0;
  result:number=0;

  add(){
    this.result=this.num1+this.num2;
  };

  subtract(){
    if(this.num1 > this.num2){
    this.result=this.num1-this.num2;
    }else{
    this.result=this.num2-this.num1;
    }
  }

  multiply(){
    this.result=this.num1*this.num2;
  }

  Division(){
    if(this.num2===0){
      alert("Number cannot be divided by zero!");
      return;
    }else{
    this.result=this.num1/this.num2;
    }
  }

  Clear(){
    this.num1=0;
    this.num2=0;
    this.result=0;
  }
}
