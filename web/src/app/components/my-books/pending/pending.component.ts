import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/services/loan.service';
import { Loan } from 'src/app/models/Loan';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {

  loans: Loan[];

  constructor(
    private loanService: LoanService,
  ) { }

  ngOnInit() {
    this.loanService.getPending()
      .subscribe((loans: Loan[]) => {
        this.loans = loans;
      });
  }

}
