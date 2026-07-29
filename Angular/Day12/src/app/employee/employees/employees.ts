import { Component } from '@angular/core';
import { DashboardService } from '../../dashboard-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employees',
  imports: [FormsModule,CommonModule],
  templateUrl: './employees.html',
  styleUrl: './employees.css',
})
export class Employees {
searchText = '';
searchDepartment='';
searchWork='';
employees: any[] = [];
filteredEmployees: any[] = [];
isSearched = false;
constructor(public employeeService:DashboardService){}
ngOnInit() {
  this.employees = this.employeeService.getEmployees();
}

search() {
  const value = this.searchText.trim().toLowerCase();

  if (!value) {
    this.isSearched = false;
    this.filteredEmployees = [];
    return;
  }

  this.isSearched = true;

  this.filteredEmployees = this.employees.filter(emp =>
    emp.name.toLowerCase().includes(value) ||
    emp.email.toLowerCase().includes(value) ||
    emp.mobile.includes(value)
  );
}

filterByDepartment() {
  if (!this.searchDepartment) {
    this.isSearched = false;
    this.filteredEmployees = [];
    return;
  }

  this.isSearched = true;

  this.filteredEmployees = this.employees.filter(emp =>emp.department === this.searchDepartment);
}

filterByWorkPlace() {
  if (!this.searchWork) {
    this.isSearched = false;
    this.filteredEmployees = [];
    return;
  }

  this.isSearched = true;

  this.filteredEmployees = this.employees.filter(emp =>emp.workLocation === this.searchWork);
}
}

