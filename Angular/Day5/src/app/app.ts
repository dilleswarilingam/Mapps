import { Component } from '@angular/core';
import { EmployeeComponent } from './employee-component/employee-component';
import { Student } from './student/student';

@Component({
  selector: 'app-root',
  imports: [EmployeeComponent,Student],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
