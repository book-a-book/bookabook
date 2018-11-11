import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {

  public user;

  constructor(
    private authService: AuthenticationService,
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
}
