import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { SubSink } from 'subsink';
interface userdetail {
  name: string;
  email: string;
  faculty?: string;
  number: number;
  registrationNumber: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProfileService implements OnDestroy{
  sub: SubSink;
  constructor(private http: HttpClient) { }
  private BaseURL = environment.BaseUrl;
  getUserDetail() {
    const URL = this.BaseURL + 'userdetail/get';
    return this.http.get<userdetail>(URL);
  }
  submitSkills(data) {
    const URL = this.BaseURL + 'skills/update';
    return this.http.post<any>(URL, data);
  }
  getSkills() {
    const URL = this.BaseURL + 'skills/get';
    return this.http.get<any>(URL);
  }
  ngOnDestroy() {

  }

}
