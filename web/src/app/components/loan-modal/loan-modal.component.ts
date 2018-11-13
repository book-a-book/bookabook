import { Component, Input, ViewChild } from '@angular/core';
import { Book } from 'src/app/models';

@Component({
  selector: 'loan-modal',
  templateUrl: './loan-modal.component.html',
  styleUrls: ['./loan-modal.component.scss']
})
export class LoanModalComponent {

  @Input() type: Boolean;

  @Input() book: Book;

  @ViewChild('basicModal') modal;

  constructor() { }

  submit() {
    if (this.type) {
      console.log("aceptar");
    } else {
      console.log("pedir")
    }
  }

  open() {
    this.modal.show();
  }

}
