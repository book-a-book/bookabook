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
    // return this.http.get<Loan[]>(this.config.apiUrl);
    return new Observable<Loan[]>(observer => {
      observer.next([
        {
          book: '123',
          owner: '123',
          lentTo: '123',
          status: 0,
          bookObj: {
            title: 'Este me lo quieren pedir prestado',
            about: 'Una historia del éxito',
            author: 'CAP',
            isActive: true,
            picture: 'hola',
            tags: [],
            created_date: new Date(),
            owner: '123',
            lendTo: '123',
          }
        }
      ]);
    });
  }

  getLent(): Observable<Loan[]> {
    return new Observable<Loan[]>(observer => {
      observer.next([
        {
          book: '123',
          owner: '123',
          lentTo: '123',
          status: 0,
          bookObj: {
            title: 'Acá va uno que tengo prestado',
            about: 'Una historia del éxito',
            author: 'CAP',
            isActive: true,
            picture: 'hola',
            tags: [],
            created_date: new Date(),
            owner: '123',
            lendTo: '123',
          }
        }
      ]);
    });
  }
}
