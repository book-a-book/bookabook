import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import { AppConfig } from "../app.config";

@Injectable()
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private config: AppConfig,
  ) { }

  register(name: string, lastName: string, username: string, password: string) {
    return this.http.post(this.config.apiUrl + "/register", {
      name: name,
      lastName: lastName,
      username: username,
      password: password
    });
  }

  login(email: string, password: string) {
    return this.http.post(this.config.apiUrl + "/login", {
      username: email,
      password: password
    });
  }

  logout() { }

  can(roles: string[]) {
    return true;
  }
}
