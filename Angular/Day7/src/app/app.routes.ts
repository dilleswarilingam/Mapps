import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { AddStudent} from './dashboard/add-student/add-student';
import { EditStudent } from './dashboard/edit-student/edit-student';
import { StudentDetails } from './dashboard/student-details/student-details';
import { StudentList } from './dashboard/student-list/student-list';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
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
                component:StudentList
            },
            {
                path:'',
                redirectTo:'add',
                pathMatch:'full'
            }
        ]

    }
];
