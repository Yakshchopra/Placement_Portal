import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routing Module
import { LazyRoutingModule } from './lazy-routing.module';

// Components
import { LazyComponent } from './lazy.component';
import { SidebarComponent} from './components/sidebar/sidebar.component';
import { ProfileComponent } from './components/profile/profile.component'

//Angular Material
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    LazyComponent,
    SidebarComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
    MatDialogModule,
  
    
  ]
})
export class LazyModule { }
