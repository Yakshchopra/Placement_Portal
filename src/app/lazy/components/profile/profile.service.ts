import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
interface userdetail {
  name: string,
  email: string,
  faculty?: string,
  number: number,
  registrationNumber: string
}
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  private BaseURL = environment.BaseUrl;
  getUserDetail() {
    let URL = this.BaseURL + 'userdetail/get'
    return this.http.get<userdetail>(URL);
  }
}
