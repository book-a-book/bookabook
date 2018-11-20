import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';
import { Loan } from '../models/Loan';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private _loansService = new Subject<Loan>();
  loans$ = this._loansService.asObservable();

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

  borrow(bookId: String) {
    const observable = this.http.post<Loan>(this.config.apiUrl + '/borrow/' + bookId, {}, this.jwt()).share();

    observable.subscribe(loan => this._loansService.next(loan));

    return observable;
  }

  borrowAccept(loanId: String) {
    const observable = this.http.post<Loan>(this.config.apiUrl + '/borrow-accept/' + loanId, {}, this.jwt()).share();

    observable.subscribe(loan => this._loansService.next(loan));

    return observable;
  }

  return(loanId: String, rating: Number) {
    const observable = this.http.post<Loan>(this.config.apiUrl + '/return/' + loanId, { rating: rating }, this.jwt()).share();

    observable.subscribe(loan => this._loansService.next(loan));

    return observable;
  }

  returnAccept(loanId: String, rating: Number) {
    const observable = this.http.post<Loan>(this.config.apiUrl + '/return-accept/' + loanId, { rating: rating }, this.jwt()).share();

    observable.subscribe(loan => this._loansService.next(loan));

    return observable;
  }

  jwt() {
    const token = localStorage.getItem('token');
    return { headers: { 'Authorization': `Bearer ${token}` } };
  }

}
