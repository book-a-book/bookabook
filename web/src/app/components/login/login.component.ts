import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  helper = new JwtHelperService();

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {

  }

  login() {
    this.authService.login(this.username, this.password)
      .subscribe(
        (response: any) => {
          console.log(response);
          const res = response;
          const decodedToken = this.helper.decodeToken(res.token);
          console.log(decodedToken);

          localStorage.setItem('token', res.token);
          localStorage.setItem('userId', decodedToken.sub);
          localStorage.setItem('userName', decodedToken.userName);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

}
