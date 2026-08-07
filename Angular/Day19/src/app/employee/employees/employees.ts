import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../employess-service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './employees.html',
  styleUrl: './employees.css'
})
export class Employees {

  searchText = '';
  searchDepartment = '';
  searchWork = '';

  employees: any[] = [];
  filteredEmployees: any[] = [];
  isSearched = false;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
      }
    });
  }

  search() {

    if (!this.searchText.trim()) {
      this.isSearched = false;
      this.filteredEmployees = [];
      return;
    }

    const value = this.searchText.trim().toLowerCase();

    this.filteredEmployees = this.employees.filter(emp =>
      emp.name.toLowerCase().includes(value) ||
      emp.email.toLowerCase().includes(value) ||
      emp.mobile.includes(value)
    );

  this.isSearched = true;

  }

  filterByDepartment() {

    if (!this.searchDepartment) {
      this.isSearched = false;
      this.filteredEmployees = [];
      return;
    }

    
    this.filteredEmployees = this.employees.filter(
    emp => emp.department === this.searchDepartment
  );

  this.isSearched = true;

  }

  filterByWorkPlace() {

    if (!this.searchWork) {
      this.isSearched = false;
      this.filteredEmployees = [];
      return;
    }

    this.employeeService.getEmployeesByWorkLocation(this.searchWork)
      .subscribe({
        next: (data) => {
          this.filteredEmployees = data;
          this.isSearched = true;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log("Completed");
        }

      });

  }

}