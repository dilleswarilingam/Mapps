import { Injectable } from '@angular/core';
import { StudentModel } from '../Models/student-model';
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students:StudentModel[]=[];
  

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
