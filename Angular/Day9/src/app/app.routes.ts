import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { AddStudent} from './dashboard/add-student/add-student';
import { EditStudent } from './dashboard/edit-student/edit-student';
import { StudentDetails } from './dashboard/student-details/student-details';
import { StudentList } from './dashboard/student-list/student-list';
import { LoginComponent } from './login-component/login-component';
import { authGuard } from './guards/auth-guard';
export const routes: Routes = [
    {
        path:'',
        redirectTo:'/dashboard/add',
        pathMatch:'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path:'dashboard',
        component:Dashboard,
        children:[
            {
                path:'add',
                component:AddStudent
            },
            {
                path:'edit/:id',
                component:EditStudent
            },
            {
                path:'details/:id',
                component:StudentDetails
            },
            {
                path:'list',
                component:StudentList,
                canActivate:[authGuard]
            },
            {
                path:'',
                redirectTo:'add',
                pathMatch:'full'
            }
        ]

    }
];
