import { Component, OnInit } from '@angular/core';
import { Book, User } from 'src/app/models';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.scss']
})
export class MineComponent implements OnInit {

  books: Book[];
  users: User[];
  userId: String;

  constructor(
    private bookService: BookService,
  ) { }

  ngOnInit() {
    this.userId = localStorage.getItem('userId');
    this.bookService.getMyBooks()
      .subscribe((books: Book[]) => this.processBooks(books));
  }

  processBooks(books) {
    this.books = books;
    this.books.forEach(book => book.ownerObj = this.users.find(user => user._id == book.owner));
  }
}
