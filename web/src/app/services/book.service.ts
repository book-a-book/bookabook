import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';
import { Book } from '../models';
import 'rxjs/Rx';
import { jwtHeaders } from './jwtHeaders';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BookService {

    constructor(
        private http: HttpClient,
        private config: AppConfig,
    ) { }

    create(book: Book) {
        return this.http.post(this.config.apiUrl + '/books', book, jwtHeaders)
            .map((response: Response) => response.json());
    }

    getAll() {
        return this.http.get<Book[]>(this.config.apiUrl + '/books', jwtHeaders);
    }

    getMyBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(this.config.apiUrl + '/books/mine', jwtHeaders);
    }
}