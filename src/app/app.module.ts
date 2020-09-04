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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DetailsformComponent,
    EmailVerifyComponent,
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
    MatProgressSpinnerModule

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
