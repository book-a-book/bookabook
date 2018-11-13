import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';
import { Loan } from '../models/Loan';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(
    private http: HttpClient,
    private config: AppConfig,
  ) { }

  getPending(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.config.apiUrl + '/loans/pending', this.jwt());
  }

  getLent(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.config.apiUrl + '/loans/active', this.jwt());
  }

  jwt() {
    const token = localStorage.getItem('token');
    return { headers: { 'Authorization': `Bearer ${token}` } };
  }

}
