import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyComponent } from './lazy.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [{ path: '', component: ProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
