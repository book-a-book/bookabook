import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { Book, Loan } from 'src/app/models';
import { Status } from 'src/app/models/Status';
import { LoanService } from 'src/app/services/loan.service';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'loan-modal',
  templateUrl: './loan-modal.component.html',
  styleUrls: ['./loan-modal.component.scss']
})
export class LoanModalComponent {

  loan: Loan;
  book: Book;
  statuses = Status;
  userId: String;
  rating: Number;
  @Output() refresh = new EventEmitter<boolean>();

  @ViewChild('basicModal') modal: ModalDirective;

  constructor(
    private loanService: LoanService,
  ) { }

  ngOnInit() {
    this.userId = localStorage.getItem('userId');
  }

  open() {
    this.modal.show();
  }

  close() {
    this.modal.hide();
    this.refresh.emit(true);
  }

  get status(): Status {
    if (this.loan) {
      switch (this.loan.status) {
        case 0:
          return Status.REQUESTED;
        case 1:
          return Status.LENT;
        case 2:
          return Status.RETURNED;
        case 3:
          return Status.RETURNED_ACCEPTED;
      }
    }
    return Status.AVAILABLE;
  }

  get seeFeedback(): Boolean {
    if (this.status === Status.LENT && this.book.owner != this.userId) {
      return true;
    }
    if (this.status === Status.RETURNED && this.book.owner == this.userId) {
      return true;
    }
    return false
  }

  request() {
    this.loanService.borrow(this.book._id)
      .subscribe((loan: Loan) => {
        this.close();
      });
  }

  requestAccept() {
    this.loanService.borrowAccept(this.loan._id)
      .subscribe((loan: Loan) => {
        this.close();
      });
  }

  return() {
    this.loanService.return(this.loan._id, this.rating)
      .subscribe((loan: Loan) => {
        this.close();
      });
  }

  returnAccept() {
    console.log(this.rating);
    this.loanService.returnAccept(this.loan._id, this.rating)
      .subscribe((loan: Loan) => this.close());
  }

  ratingChange(rating) {
    this.rating = rating;
  }
}
