import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routing Module
import { LazyRoutingModule } from './lazy-routing.module';

// Components
import { LazyComponent } from './lazy.component';
import { SidebarComponent} from './components/sidebar/sidebar.component';
import { ProfileComponent } from './components/profile/profile.component'
import { StudentAchivementsComponent } from './components/student-achivements/student-achivements.component';


//Angular Material
import { MatDialogModule } from '@angular/material/dialog';
import { StudentEduComponent } from './components/student-edu/student-edu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import {DragDropModule} from '@angular/cdk/drag-drop';


//Service
import { ProfileService } from './components/profile/profile.service';

//Other modules
import { NgxFileDropModule } from 'ngx-file-drop';
import { UploadFileComponent } from './popups/upload-file/upload-file.component';
import { StudentVerficationComponent } from './popups/student-verfication/student-verfication.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LazyComponent,
    SidebarComponent,
    ProfileComponent,
    StudentEduComponent,
    UploadFileComponent,
    StudentAchivementsComponent,
    StudentVerficationComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
    MatDialogModule,
    MatIconModule,
    NgxFileDropModule,
    FormsModule,
    MatChipsModule,
    DragDropModule
  
    
  ],
  providers: [ProfileService],
  bootstrap: [LazyComponent]
})
export class LazyModule { }
