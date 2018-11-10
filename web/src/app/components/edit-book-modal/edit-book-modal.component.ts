import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'edit-book-modal',
  templateUrl: './edit-book-modal.component.html',
  styleUrls: ['./edit-book-modal.component.scss']
})
export class EditBookModalComponent implements OnInit {

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

  saveBook() {
    console.log(this);
  }
}
