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
    component:Login
   },
  {
    path: 'employee',

    component: EmployeeLayoutComponent,
    canActivate:[authGuard],

    children: [

      {
        path: 'dashboard',
        component: Dashboard
      },

      {
        path: 'employees',
        component: Employees
      },

      {
        path: 'attendance',
        component: Attendance
      },

      {
        path: 'leaves',
        component: Leaves
      },

      {
        path: 'calendar',
        component: Calendar
      },

      {
        path: 'settings',
        component: Settings
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