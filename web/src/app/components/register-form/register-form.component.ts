import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"]
})
export class RegisterFormComponent implements OnInit {
  name: string;
  lastName: string;
  username: string;
  password: string;
  registerError: boolean;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {}
  register() {
    this.authService
      .register(this.name, this.lastName, this.username, this.password)
      .subscribe(
        (response: any) => {
          this.router.navigate(["login"]);
        },
        err => {
          this.registerError = true;
        }
      );
  }
}
