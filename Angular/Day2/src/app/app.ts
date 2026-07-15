import { Component, signal } from '@angular/core';
import { Student } from './student/student';
import { Employee } from "./employee/employee";
@Component({
  selector: 'app-root',
   standalone: true,
  imports: [ Student, Employee],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   title = signal('Navya');
   message:string ='Existing message';
   name:string="Dilly";
  age:number=21;

  count:number=0;

   changeText(){
    this.message="New message";
   }
    incrementCount(){
      this.count++;
    }
}
