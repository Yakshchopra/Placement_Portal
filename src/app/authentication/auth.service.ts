import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }
  // Base Url
  BaseURL = environment.BaseUrl;

  // Regsiter Function
  register<Observable>(form) {
    const RegisterUrl = this.BaseURL + 'students/register';
    return this.http.post(RegisterUrl, form);
  }
  // Login Function
  login(form, i: number) {
    const LoginUrl = this.BaseURL + ['students/login', 'faculty/login', 'admin/login'][i];
    return this.http.post(LoginUrl, form);
  }
  verifyEmail(token) {
    const verifyURL = this.BaseURL + 'verifyemail';
    return this.http.post(verifyURL, { token });
  }




}
