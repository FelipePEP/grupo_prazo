import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './layout.html',
  styleUrls: ['./style.css']
})
export class NavBarComponent {
  constructor(private router: Router) { }
  logOut() {
    localStorage.token = null;
    localStorage.isAdmin = false;
    this.router.navigate(['/login']);
  }
}
