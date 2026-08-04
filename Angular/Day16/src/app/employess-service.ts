import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = 'http://localhost:3000/employeesDetails';

  constructor(private http: HttpClient) {}

  getEmployees():Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }


  getEmployeesByWorkLocation(workLocation: string) {
    return this.http.get<any[]>(
      `${this.url}?workLocation=${workLocation}`
    );
  }
}
    