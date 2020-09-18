import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyComponent } from './lazy.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StudentEduComponent } from './components/student-edu/student-edu.component';
import { StudentAchivementsComponent } from './components/student-achivements/student-achivements.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { PlacementComponent } from './components/placement/placement.component';

const routes: Routes = [{
  path: '', component: LazyComponent, children: [
    { path: '', redirectTo: 'profile'},
    { path: 'profile', component: ProfileComponent },
    { path: 'education', component: StudentEduComponent },
    { path: 'achivements', component: StudentAchivementsComponent},
    { path: 'certifications', component: CertificationsComponent},
    {path: 'placements', component: PlacementComponent}

  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
