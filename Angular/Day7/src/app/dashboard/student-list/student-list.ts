import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../services/student';
@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  students:any[]=[];
  constructor(public studentservice:Student){};

  ngOnInit(){
    this.students=this.studentservice.getData();
  }
}
