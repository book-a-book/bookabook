import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'new-book-modal',
  templateUrl: './new-book-modal.component.html',
  styleUrls: ['./new-book-modal.component.scss']
})
export class NewBookModalComponent implements OnInit {

  title: String;
  editorial: String;
  author: String;
  about: String;
  launchDate: Number;
  imgLink: String;
  constructor() { }

  ngOnInit() {
  }

  saveBook() {
    console.log(this);
    this.title = "";
    this.editorial = "";
    this.author = "";
    this.about = "";
    this.launchDate = null;
    this.imgLink = "";
  }

}
