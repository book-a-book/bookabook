import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from 'src/app/models';
import { BookService } from '../../services/book.service';
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
  launchDate: Date;
  imgLink: String;
  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
  }

  saveBook() {
    var book = new Book();
    book.about = this.about;
    book.author = this.author;
    book.created_date = this.launchDate;
    book.picture = this.imgLink;
    book.title = this.title;
    this.bookService.create(book);
    this.title = "";
    this.editorial = "";
    this.author = "";
    this.about = "";
    this.launchDate = null;
    this.imgLink = "";
  }

}
