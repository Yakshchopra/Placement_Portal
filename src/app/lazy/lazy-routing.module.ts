import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyComponent } from './lazy.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StudentEduComponent } from './components/student-edu/student-edu.component';

const routes: Routes = [{
  path: '', component: LazyComponent, children: [
    { path: '', redirectTo:'profile'},
    { path: 'profile', component: ProfileComponent },
    { path: 'education', component: StudentEduComponent },
    { path: 'post?', redirectTo:'education' },
    
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
