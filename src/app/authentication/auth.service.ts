import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }
  //Base Url
  BaseURL = environment.BaseUrl;

  //Regsiter Function
  register<Observable>(form) {
    let RegisterUrl = this.BaseURL + 'register';
    return this.http.post(RegisterUrl, form);
  }
  //Login Function
  login(form) {
    let LoginUrl = this.BaseURL + 'login';
    return this.http.post(LoginUrl, form);
  }

  
  

}
