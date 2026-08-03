import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../layout/header/header';
import { SidebarComponent } from '../../layout/sidebar/sidebar';


@Component({
  selector:'app-employee-layout',
  standalone:true,

  imports:[
    HeaderComponent,
    SidebarComponent,
    RouterOutlet,
    CommonModule
  ],

  templateUrl:'./employee-layout.html',
  styleUrl:'./employee-layout.css'
})
export class EmployeeLayoutComponent {
sidebaropen:boolean=true;
toggelSideBar(){
  this.sidebaropen=!this.sidebaropen;
}

}
