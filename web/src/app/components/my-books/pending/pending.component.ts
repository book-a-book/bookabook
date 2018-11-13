import { Component, OnInit, ViewChild } from '@angular/core';
import { LoanService } from 'src/app/services/loan.service';
import { Loan } from 'src/app/models/Loan';
import { AppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {

  loans: Loan[];

  @ViewChild('modal') modal;

  constructor(
    private loanService: LoanService,
    private config: AppConfig
  ) { }

  ngOnInit() {
    this.modal.type = true;
    this.loanService.getPending()
      .subscribe((loans: Loan[]) => {
        this.loans = loans;
        this.processBooks();
      });
  }

  processBooks() {
    this.loans.forEach(loan => {
      if (!loan.bookObj.picture) return;
      loan.bookObj.picture = loan.bookObj.picture.replace('public', `${this.config.apiUrl}`);
    });
  }

  openModal(loan: Loan) {
    this.modal.book = loan.bookObj;
    this.modal.open();
  }

}
