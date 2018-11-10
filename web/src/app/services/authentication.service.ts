import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(environment.baseUrl + '/login', {
      'username': email,
      'password': password,
    });
  }

  logout() { }

  can(roles: string[]) {
    return true;
  }

}
