import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/services/authentication.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  helper = new JwtHelperService();
  loginError = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    if (localStorage.getItem("userId")) {
      this.router.navigate(["/"]);
    }
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        const decodedToken = this.helper.decodeToken(response.token);
        localStorage.setItem("userId", decodedToken.sub);
        localStorage.setItem("username", this.username);
        localStorage.setItem("token", response.token);
        this.router.navigate(["/"]);
      },
      err => {
        this.loginError = true;
      }
    );
  }

  navigateToRegisterForm() {
    this.router.navigate(["register"]);
  }
}
