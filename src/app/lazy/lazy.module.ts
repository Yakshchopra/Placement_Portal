import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routing Module
import { LazyRoutingModule } from './lazy-routing.module';

// Components
import { LazyComponent } from './lazy.component';
import { SidebarComponent} from './components/sidebar/sidebar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StudentAchivementsComponent } from './components/student-achivements/student-achivements.component';


// Angular Material
import { MatDialogModule } from '@angular/material/dialog';
import { StudentEduComponent } from './components/student-edu/student-edu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';

// Service
import { ProfileService } from './components/profile/profile.service';

// Other modules
import { NgxFileDropModule } from 'ngx-file-drop';
import { UploadFileComponent } from './popups/upload-file/upload-file.component';
import { StudentVerficationComponent } from './popups/student-verfication/student-verfication.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';
import { PlacementDetailsComponent } from './popups/placement-details/placement-details.component';
import { RegSelectinComponent } from './components/reg-selectin/reg-selectin.component';
import { FacultyProfileComponent } from './components/faculty-profile/faculty-profile.component';

@NgModule({
  declarations: [
    LazyComponent,
    SidebarComponent,
    ProfileComponent,
    StudentEduComponent,
    UploadFileComponent,
    StudentAchivementsComponent,
    StudentVerficationComponent,
    ErrorComponent,
    PlacementDetailsComponent,
    RegSelectinComponent,
    FacultyProfileComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
    MatDialogModule,
    MatIconModule,
    NgxFileDropModule,
    FormsModule,
    MatChipsModule,
    DragDropModule,
    MatProgressBarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule
  ],
  providers: [ProfileService],
  bootstrap: [LazyComponent]
})
export class LazyModule { }
