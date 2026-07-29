import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../dashboard-service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-attendance',
  imports: [CommonModule,FormsModule],
  templateUrl: './attendance.html',
  styleUrl: './attendance.css',
})
export class Attendance {
 months:string[] = ["All","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 status:string[]=["All","Approved","Rejected","Submitted","Draft"];
 headings:string[]=["START DATE","END DATE","HOURS","SUBMITTED DATE","STATUS","APPROVED DATE"];
 timesheets:any[]=[];
 constructor(public dashboardservice:DashboardService){}

 ngOnInit(){
  this.timesheets=this.dashboardservice.getTimesheetData();
 }
}
