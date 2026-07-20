import { Component } from '@angular/core';
import { Employeeservice } from '../employees';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employee-component',
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-component.html',
  styleUrl: './employee-component.css',
})
export class EmployeeComponent {
   
   selectedStatus = "All";

  constructor(public service: Employeeservice) {}

  get filteredEmployees() {
    if (this.selectedStatus === "All") {
      return this.service.employees;
    }

    return this.service.employees.filter(
      emp => emp.status === this.selectedStatus
    );
  }
}
