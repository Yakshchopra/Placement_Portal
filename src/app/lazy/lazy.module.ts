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
import { StudentEduComponent } from './components/student-edu/student-edu.component';

//Service
import { ProfileService } from './components/profile/profile.service';
import { StudentAchivementsComponent } from './components/student-achivements/student-achivements.component';


@NgModule({
  declarations: [
    LazyComponent,
    SidebarComponent,
    ProfileComponent,
    StudentEduComponent,
    StudentAchivementsComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
    MatDialogModule,
  
    
  ],
  providers:[ProfileService]
})
export class LazyModule { }
