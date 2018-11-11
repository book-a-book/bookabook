import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models';
import { AppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public books: Book[];
  public topBooks: Book[];
  public imagesUrl;

  constructor(private bookService: BookService, private config: AppConfig) { }

  ngOnInit() {
    this.bookService.getAll()
      .subscribe(books => {
        this.books = books;
        this.processBooks(this.books);
      });

    this.bookService.getAll()
      .subscribe(books => {
        this.topBooks = books.sort((a, b) => a.title < b.title ? -1 : 1);
        this.processBooks(this.topBooks);
      });
  }

  processBooks(books) {
    books.forEach(book => {
      book.picture = book.picture.replace('public', `${this.config.apiUrl}`);
    });
  }

  getTopBooks() {
    if (!this.topBooks) return undefined;
    this.topBooks.sort((a, b) => a.title < b.title ? -1 : 1);
    return this.topBooks;
  }

}
