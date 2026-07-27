import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../services/student';
import { StudentModel } from '../../Models/student-model';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule,RouterLink],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  students:StudentModel[]=[];

  departments=["CSE","AI&DS","ECE","MECH","EEE"];
  constructor(public studentservice:StudentService ,private route:ActivatedRoute){};

  ngOnInit(){
    this.students=this.studentservice.getData();

    this.route.queryParams.subscribe(params=>{
      const femaleStudents=params['gender'];
      const department=params['department'];
      const topperMarks=params['marks'];
      let filteredStudents=this.studentservice.getData();
      if(femaleStudents){
        filteredStudents=filteredStudents.filter(student=>student.gender===femaleStudents);
      }
      if(department){
        filteredStudents=filteredStudents.filter(student=>student.department===department);
      }
      if(topperMarks){
        filteredStudents=filteredStudents.filter(student=>student.marks>=9);
      }
      this.students=filteredStudents;
    })


  }

  deleteStudent(id:number){
    this.studentservice.deleteStudents(id);
    this.students=this.studentservice.getData();

  }
}
