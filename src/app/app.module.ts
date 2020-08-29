import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Authentication Components
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';

//Forms Module
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//Http Modules
import { HttpClientModule } from '@angular/common/http'

//Service
<<<<<<< HEAD
import { AuthService} from './authentication/auth.service';
=======
import {AuthService} from './authentication/auth.service';
>>>>>>> AngularInit
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsformComponent } from './lazy/popups/detailsform/detailsform.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DetailsformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
    
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
