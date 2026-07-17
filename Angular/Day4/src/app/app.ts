import { Component } from '@angular/core';
import { EmployeeComponent } from './employee-component/employee-component';

@Component({
  selector: 'app-root',
  imports: [EmployeeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
