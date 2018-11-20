import { Component, OnInit, ViewChild } from '@angular/core';
import { LoanService } from 'src/app/services/loan.service';
import { Loan } from 'src/app/models/Loan';
import { AppConfig } from 'src/app/app.config';
import { Status } from 'src/app/models/Status';
import { User } from 'src/app/models';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {

  loans: Loan[];
  users: User[];
  userId: String;

  @ViewChild('modal') modal;

  constructor(
    private loanService: LoanService,
    private config: AppConfig
  ) { }

  ngOnInit() {
    this.refreshBooks();
    this.loanService.loans$.subscribe(loan => this.updateLoan(loan));
    this.userId = localStorage.getItem('userId');
  }

  processBooks() {
    this.loans.forEach(loan => {
      if (!loan.bookObj.picture) return;
      loan.bookObj.ownerObj = this.users.find(user => user._id == loan.bookObj.owner);
      loan.bookObj.picture = loan.bookObj.picture.replace('public', this.config.apiUrl);
    });
  }

  openModal(loan: Loan) {
    this.modal.loan = loan;
    this.modal.book = loan.bookObj;
    this.modal.open();
  }

  refreshBooks() {
    this.loanService.getPending()
      .subscribe((loans: Loan[]) => {
        this.loans = loans;
        this.processBooks();
      });
  }

  updateLoan(updatedLoan) {
    if (updatedLoan.status == Status.RETURNED) {
      this.refreshBooks();
    }
  }
}
