import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Student {
  students:any[]=[];
  

  addStudent(student:any){
    this.students.push(student);
  }
  getData(){
    return this.students;
  }
}
