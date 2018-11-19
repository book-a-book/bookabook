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

  borrow(bookId: String) {
    return this.http.post<Loan>(this.config.apiUrl + '/borrow/' + bookId, {}, this.jwt());
  }

  borrowAccept(loanId: String) {
    return this.http.post<Loan>(this.config.apiUrl + '/borrow-accept/' + loanId, {}, this.jwt());
  }

  return(loanId: String, rating: Number) {
    return this.http.post<Loan>(this.config.apiUrl + '/return/' + loanId, { rating: rating }, this.jwt());
  }

  returnAccept(loanId: String, rating: Number) {
    return this.http.post<Loan>(this.config.apiUrl + '/return-accept/' + loanId, { rating: rating }, this.jwt());
  }

}
