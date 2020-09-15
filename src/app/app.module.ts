import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Authentication Components
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { EmailVerifyComponent } from './authentication/email-verify/email-verify.component';

// Forms Module
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// Http Modules
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';

// Service
import { AuthService } from './authentication/auth.service';
import { HttpinterceptorService } from './securityTools/httpinterceptor.service';

// Toaster
import { ToastrModule } from 'ngx-toastr';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsformComponent } from './lazy/popups/detailsform/detailsform.component';
import { HttpCacheService } from './securityTools/http-cache.service';

// Material
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';
import {MatStepperModule} from '@angular/material/stepper';
import { FacultyRegistrationComponent } from './authentication/faculty-registration/faculty-registration.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DetailsformComponent,
    EmailVerifyComponent,
    FacultyRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule,
    ToastrModule.forRoot(),
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatStepperModule,
    MatNativeDateModule,
    MatStepperModule
  ],
  providers: [AuthService, HttpCacheService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpinterceptorService,
     multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
