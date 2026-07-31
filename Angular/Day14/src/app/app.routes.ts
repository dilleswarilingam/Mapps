import { Routes } from '@angular/router';

import { EmployeeLayoutComponent } from './employee/employee-layout/employee-layout';

import { Dashboard } from './employee/dashboard/dashboard';
import { Employees } from './employee/employees/employees';
import { Attendance } from './employee/attendance/attendance';
import { Leaves } from './employee/leaves/leaves';
import { Calendar } from './employee/calendar/calendar';
import { Settings } from './employee/settings/settings';
import { Login } from './login/login';

import { authGuard } from './auth/auth.guard';


export const routes: Routes = [
   {
    path:'login',
    loadComponent: () =>
      import('./login/login')
        .then(m => m.Login)
   },
  {
    path: 'employee',
    component: EmployeeLayoutComponent,
    canActivate:[authGuard],
    

    children: [

      {
        path: 'dashboard',
        loadComponent:()=>
          import('./employee/dashboard/dashboard')
        .then(m=>m.Dashboard)
      },

      {
        path: 'employees',
        loadComponent: () =>
          import('./employee/employees/employees')
            .then(m => m.Employees)
      },

      {
        path: 'attendance',
        loadComponent: () =>
          import('./employee/attendance/attendance')
            .then(m => m.Attendance)
      },

      {
        path: 'leaves',
        loadComponent: () =>
          import('./employee/leaves/leaves')
            .then(m => m.Leaves)
      },

      {
        path: 'calendar',
        loadComponent: () =>
          import('./employee/calendar/calendar')
            .then(m => m.Calendar)
      },

      {
        path: 'settings',
        loadComponent: () =>
          import('./employee/settings/settings')
            .then(m => m.Settings)
      },

      {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
      }

    ]

  },


  {
    path:'',
    redirectTo:'employee/dashboard',
    pathMatch:'full'
  }

];