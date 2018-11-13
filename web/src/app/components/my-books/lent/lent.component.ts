import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/models';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-lent',
  templateUrl: './lent.component.html',
  styleUrls: ['./lent.component.scss']
})
export class LentComponent implements OnInit {

  loans: Loan[];

  constructor(
    private loanService: LoanService,
  ) { }

  ngOnInit() {
    this.loanService.getLent()
      .subscribe((loans: Loan[]) => {
        this.loans = loans;
      });
  }

}
