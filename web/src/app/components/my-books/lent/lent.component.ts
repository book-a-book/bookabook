import { Component, OnInit, ViewChild } from '@angular/core';
import { Loan } from 'src/app/models';
import { LoanService } from 'src/app/services/loan.service';
import { LoanModalComponent } from '../../loan-modal/loan-modal.component';

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
  ) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.loanService.getLent()
      .subscribe((loans: Loan[]) => {
        this.loans = loans;
      });
  }

  openModal(loan: Loan) {
    this.modal.loan = loan;
    this.modal.book = loan.bookObj;
    this.modal.open();
  }
}
