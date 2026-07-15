import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-student',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  fname:string="navya";
  myage:number=21;
  picture:string="favicon.ico";

  username:string="";
}
