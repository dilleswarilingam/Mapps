import { Injectable } from '@angular/core';
import { StudentModel } from '../Models/student-model';
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students:StudentModel[]=[
    {
      id: 1,
      name: "Navya",
      email: "navya@gmail.com",
      class: "3rd Year",
      department: "CSE",
      marks: 9.0,
      gender: "Female"
    },
    {
      id: 2,
      name: "Prabash",
      email: "prabhash@gmail.com",
      class: "2nd Year",
      department: "ECE",
      marks: 8.5,
      gender: "Male"
    },
    {
      id: 3,
      name: "Abhigna",
      email: "abhigna@gmail.com",
      class: "4th Year",
      department: "AI&DS",
      marks: 9.3,
      gender: "Female"
    },
    {
      id: 4,
      name: "Balaji",
      email: "balaji@gmail.com",
      class: "1st Year",
      department: "MECH",
      marks: 7.8,
      gender: "Male"
    }
  ];

  addStudent(student:StudentModel){
    this.students.push(student);
  }
  getData(){
    return this.students;
  }
  getDataById(id:number){
    return this.students.find(stu=>stu.id==id);
  }
  deleteStudents(id:number){
    this.students=this.students.filter(stu=>stu.id !==id);
  }

  updateStudent(updatedstudent:StudentModel){
    let index=this.students.findIndex(stu=>stu.id===updatedstudent.id);
    if(index!==-1){
      this.students[index]=updatedstudent;
    }

  }
}
