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
import {MatIconModule} from '@angular/material/icon';

//Service
import { ProfileService } from './components/profile/profile.service';
import { StudentAchivementsComponent } from './components/student-achivements/student-achivements.component';

//Other modules
import { NgxFileDropModule } from 'ngx-file-drop';
import { UploadFileComponent } from './popups/upload-file/upload-file.component';
import { StuPlacementComponent } from './components/stu-placement/stu-placement.component';

@NgModule({
  declarations: [
    LazyComponent,
    SidebarComponent,
    ProfileComponent,
    StudentEduComponent,
    UploadFileComponent,
    StuPlacementComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
    MatDialogModule,
    MatIconModule,
    NgxFileDropModule
  
    
  ],
  providers: [ProfileService],
  bootstrap: [LazyComponent]
})
export class LazyModule { }
