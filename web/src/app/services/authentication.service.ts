import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpResponse } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  register(name: string, lastName: string, username: string, password: string) {
    return this.http.post(environment.baseUrl + "/register", {
      name: name,
      lastName: lastName,
      username: username,
      password: password
    });
  }

  login(email: string, password: string) {
    return this.http.post(environment.baseUrl + "/login", {
      username: email,
      password: password
    });
  }

  logout() {}

  can(roles: string[]) {
    return true;
  }
}
