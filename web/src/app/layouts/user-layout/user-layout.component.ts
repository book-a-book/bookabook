import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  get isGuest(): boolean {
    return localStorage.getItem('userId') ? false : true;
  }

  get username(): string {
    return localStorage.getItem('username');
  }
}
