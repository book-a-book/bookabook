import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'book-request-modal',
  templateUrl: './book-request-modal.component.html',
  styleUrls: ['./book-request-modal.component.scss']
})
export class BookRequestModalComponent implements OnInit {

  @Input()
  id: number;

  @Input()
  title: String;

  @Input()
  editorial: String;

  @Input()
  author: String;

  @Input()
  about: String;

  @Input()
  launchDate: Number;

  @Input()
  imgLink: String;

  constructor() { }

  ngOnInit() {
  }

  borrow() {
    console.log("pedir libro")
  }

}
