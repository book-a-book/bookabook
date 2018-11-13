import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';
import { Loan } from '../models/Loan';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtHeaders } from './jwtHeaders';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(
    private http: HttpClient,
    private config: AppConfig,
  ) { }

  getPending(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.config.apiUrl + '/loans/pending', jwtHeaders);
  }

  getLent(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.config.apiUrl + '/loans/active', jwtHeaders);
  }
}
