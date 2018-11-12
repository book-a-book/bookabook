import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../app.config';
import { Book } from '../models';
import 'rxjs/Rx';

@Injectable()
export class BookService {

    constructor(private http: HttpClient, private config: AppConfig) { }

    create(book: Book) {
        return this.http.post(this.config.apiUrl + '/books', book).map((response: Response) => response.json());
    }

    getAll() {
        return this.http.get<Book[]>(this.config.apiUrl + '/books', this.jwt());
    }

    jwt() {
        const headers = new HttpHeaders({
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YmU3MzZkM2I5ZDFiODFlM2I3YWRjOTMiLCJpYXQiOjE1NDE4ODk0OTQsImV4cCI6MTU0MzA5OTA5NH0.NDPxDVLLzy37CVpR4xYgUM4mWjoh6lPdYv8X_3R05Qs'
        });
        return { headers: headers };
    }

}