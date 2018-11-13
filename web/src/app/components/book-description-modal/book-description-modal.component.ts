import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'book-description-modal',
  templateUrl: './book-description-modal.component.html',
  styleUrls: ['./book-description-modal.component.scss']
})

export class BookDescriptionModalComponent implements OnInit {

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

}
