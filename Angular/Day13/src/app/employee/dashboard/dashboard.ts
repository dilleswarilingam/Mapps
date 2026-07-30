import { Component } from '@angular/core';
import { DashboardService } from '../../dashboard-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  timezone:any[]=[];
  helpdesk:any[]=[];
  events:any[]=[];
  artifacts:any[]=[];

  constructor(public dashboardservice:DashboardService){}

  ngOnInit(){
    this.timezone=this.dashboardservice.getTimeZones();
    this.helpdesk=this.dashboardservice.getHelpdesk();
    this.events=this.dashboardservice.getEvents();
    this.artifacts=this.dashboardservice.getArtifacts();
  }
}
