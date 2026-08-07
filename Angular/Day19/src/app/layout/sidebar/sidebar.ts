import { Component } from '@angular/core';
import { RouterLink ,RouterLinkActive} from "@angular/router";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  imports: [RouterLink,RouterLinkActive,FormsModule,CommonModule]
})
export class SidebarComponent {
    menuItems = [
    {
      label: 'Dashboard',
      icon: '🏠',
      route: '/employee/dashboard'
    },
    {
      label: 'Employee Search',
      icon: '👥',
      route: '/employee/employees'
    },
    {
      label: 'Time Sheets',
      icon: '🕒',
      route: '/employee/attendance'
    },
    {
      label: 'Leaves',
      icon: '📅',
      route: '/employee/leaves'
    },
    {
      label: 'Calendar',
      icon: '🗓',
      route: '/employee/calendar'
    },
    {
      label: 'Appraisal Reviews',
      icon: '📊',
      route: '/employee/settings'
    }
  ];

}
