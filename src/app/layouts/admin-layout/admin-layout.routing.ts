import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';





import { ListEmployerComponent } from 'app/list-employer/list-employer.component';
import { ListCongeComponent } from 'app/list-conge/list-conge.component';
import { ListAvanceComponent } from 'app/list-avance/list-avance.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // },  {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'Acceuil',      component: DashboardComponent },
    { path: 'profile',   component: UserProfileComponent },
   
    { path: 'liste-employè',     component: ListEmployerComponent },
    { path: 'liste-congè',     component: ListCongeComponent },
    { path: 'liste-avance',     component: ListAvanceComponent},
 
    

   

];
