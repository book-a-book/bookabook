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
  public imagesUrl;

  constructor(private bookService: BookService, private config: AppConfig) { }

  ngOnInit() {
    this.imagesUrl = [
      'assets/images/Image_1.png',
      'assets/images/Image_2.png',
      'assets/images/Image_3.png',
      'assets/images/Image_4.png',
      'assets/images/Image_5.png',
      // 'assets/images/Image_6.png',
    ];

    this.bookService.getAll()
      .subscribe(books => {
        this.books = books;
        this.processBooks();
      });
  }

  processBooks() {
    this.books.forEach(book => {
      book.picture = book.picture.replace('public', `${this.config.apiUrl}`);
    });
  }

}
