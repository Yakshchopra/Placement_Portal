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
import {MatSortModule} from '@angular/material/sort';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';




// Service
import { ProfileService } from './components/profile/profile.service';
import { FacultyService } from './../faculty.service'

// Other modules
import { NgxFileDropModule } from 'ngx-file-drop';
import { UploadFileComponent } from './popups/upload-file/upload-file.component';
import { StudentVerficationComponent } from './popups/student-verfication/student-verfication.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';
import { PlacementDetailsComponent } from './popups/placement-details/placement-details.component';
import { RegSelectinComponent } from './components/reg-selectin/reg-selectin.component';
import { FacultyProfileComponent } from './components/faculty-profile/faculty-profile.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { VerificationComponent } from './components/verification/verification.component';
import { FacultySidebarComponent } from './components/faculty-sidebar/faculty-sidebar.component';
import { HackathonComponent } from './popups/hackathon/hackathon.component';
import { CodingComponent } from './popups/coding/coding.component';
import { OtherAchComponent } from './popups/other-ach/other-ach.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { InternationalCertificationsComponent } from './popups/international-certifications/international-certifications.component';
import { OtherCertificationsComponent } from './popups/other-certifications/other-certifications.component';
import { InternshipsComponent } from './popups/internships/internships.component';
import { PlacementComponent } from './components/placement/placement.component';

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
    FacultyProfileComponent,
    StudentListComponent,
    VerificationComponent,
    FacultySidebarComponent,
    HackathonComponent,
    CodingComponent,
    OtherAchComponent,
    CertificationsComponent,
    InternationalCertificationsComponent,
    OtherCertificationsComponent,
    InternshipsComponent,
    PlacementComponent
  ],
  entryComponents: [PlacementDetailsComponent],
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
    MatTableModule,
    MatSortModule,
    MatListModule,
    MatDatepickerModule,
    MatSliderModule,
    MatRadioModule
  ],
  providers: [ProfileService,FacultyService ],
  bootstrap: [LazyComponent]
})
export class LazyModule { }
