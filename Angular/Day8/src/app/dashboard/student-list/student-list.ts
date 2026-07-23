import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../services/student';
import { StudentModel } from '../../Models/student-model';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-student-list',
  imports: [CommonModule,RouterLink],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  students:StudentModel[]=[];
  constructor(public studentservice:StudentService){};

  ngOnInit(){
    this.students=this.studentservice.getData();
  }

  deleteStudent(id:number){
    this.studentservice.deleteStudents(id);
    this.students=this.studentservice.getData();

  }
}
