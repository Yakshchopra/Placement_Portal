import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ProfileComponent } from './lazy/components/profile/profile.component';
import { EmailVerifyComponent } from './authentication/email-verify/email-verify.component';
import { StudentEduComponent } from './lazy/components/student-edu/student-edu.component';
import { ErrorComponent } from './lazy/components/error/error.component';
import { AuthGuard } from './securityTools/auth.guard';

// Note-: Add other routes to lazyRouting
const routes: Routes = [
  { path: 'student', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) , canActivate:[AuthGuard]},
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'student/register/:token', component: EmailVerifyComponent },
  { path: '**' , component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
