import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-sidebar',
  templateUrl: './faculty-sidebar.component.html',
  styleUrls: ['./faculty-sidebar.component.css']
})
export class FacultySidebarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('faculty_id');
    localStorage.removeItem('user');
    this.router.navigateByUrl('/')
  }

}
