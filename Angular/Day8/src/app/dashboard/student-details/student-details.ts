import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student';
import { StudentModel } from '../../Models/student-model';
@Component({
  selector: 'app-student-details',
  imports: [CommonModule],
  templateUrl: './student-details.html',
  styleUrl: './student-details.css',
})
export class StudentDetails {
  student!:StudentModel| undefined;
  constructor(public studentservice:StudentService,private route:ActivatedRoute){};
  ngOnInit(){
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.student=this.studentservice.getDataById(id);
  }
}
