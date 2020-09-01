import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ProfileComponent } from './lazy/components/profile/profile.component';
import { EmailVerifyComponent } from './authentication/email-verify/email-verify.component';
import { StudentEduComponent } from './lazy/components/student-edu/student-edu.component';
import { StudentAchivementsComponent } from './lazy/components/student-achivements/student-achivements.component';

//Note-: Add other routes to lazyRouting
const routes: Routes = [
  { path: 'student', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'student/register/:token', component: EmailVerifyComponent},
  { path: 'education', component: StudentEduComponent},
  { path: 'achivements', component: StudentAchivementsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
