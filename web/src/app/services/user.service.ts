import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';
import { User } from '../models';
import 'rxjs/Rx';

@Injectable()
export class UserService {

    constructor(
        private http: HttpClient,
        private config: AppConfig,
    ) { }

    getById(id: string) {
        return this.http.get<User>(this.config.apiUrl + '/users/' + id, this.jwt());
    }

    getAll() {
        return this.http.get<User[]>(this.config.apiUrl + '/users', this.jwt());
    }

    jwt() {
        const token = localStorage.getItem('token');
        return { headers: { 'Authorization': `Bearer ${token}` } };
    }

};