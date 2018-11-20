import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.scss']
})
export class MineComponent implements OnInit {

  books: Book[];
  userId: String;

  constructor(
    private bookService: BookService,
  ) { }

  ngOnInit() {
    this.userId = localStorage.getItem('userId');
    this.bookService.getMyBooks()
      .subscribe((books: Book[]) => {
        this.books = books;
      });
  }
}
