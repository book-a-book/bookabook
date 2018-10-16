import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor() { }

  login(email: string, password: string) {
    return true;
  }

  logout() { }

  can(roles: string[]) {
    return true;
  }

}
