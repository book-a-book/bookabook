import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';
import { Book } from '../models';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BookService {

    constructor(
        private http: HttpClient,
        private config: AppConfig,
    ) { }

    create(book: Book) {
        return this.http.post(this.config.apiUrl + '/books', book, this.jwt())
            .map((response: Response) => response.json());
    }

    getById(id: string) {
        return this.http.get<Book>(this.config.apiUrl + '/books/' + id, this.jwt());
    }

    getAll() {
        return this.http.get<Book[]>(this.config.apiUrl + '/books', this.jwt());
    }

    getMyBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(this.config.apiUrl + '/books/mine', this.jwt());
    }

    jwt() {
        const token = localStorage.getItem('token');
        return { headers: { 'Authorization': `Bearer ${token}` } };
    }

};