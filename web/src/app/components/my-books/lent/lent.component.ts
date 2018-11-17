import { Component, OnInit, ViewChild } from '@angular/core';
import { Loan } from 'src/app/models';
import { LoanService } from 'src/app/services/loan.service';
import { LoanModalComponent } from '../../loan-modal/loan-modal.component';
import { AppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-lent',
  templateUrl: './lent.component.html',
  styleUrls: ['./lent.component.scss']
})
export class LentComponent implements OnInit {

  loans: Loan[];

  @ViewChild('modal') modal: LoanModalComponent;

  constructor(
    private loanService: LoanService,
    private config: AppConfig,
  ) { }

  ngOnInit() {
    this.refreshBooks();
  }

  refreshBooks() {
    this.loanService.getLent()
      .subscribe((loans: Loan[]) => {
        this.loans = loans;
        this.processBooks();
      });
  }

  openModal(loan: Loan) {
    this.modal.loan = loan;
    this.modal.book = loan.bookObj;
    this.modal.open();
  }

  processBooks() {
    this.loans.forEach(loan => {
      if (!loan.bookObj.picture) return;
      loan.bookObj.picture = loan.bookObj.picture.replace('public', this.config.apiUrl);
    });
  }
}
