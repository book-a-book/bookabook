import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { MyBooksComponent } from './components/my-books/my-books.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { LoginComponent } from './components/login/login.component';
import { routing } from './app.routing';
import { AuthGuard } from './guards/auth.guard';
import { EditBookModalComponent } from './components/edit-book-modal/edit-book-modal.component';
import { NewBookModalComponent } from './components/new-book-modal/new-book-modal.component';
import { FeedbackRatingModalComponent } from './components/feedback-rating-modal/feedback-rating-modal.component'
import { MDBBootstrapModule, ModalModule } from 'angular-bootstrap-md';
import { BookService } from './services/book.service';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from './app.config';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HomeComponent,
    MyBooksComponent,
    PublicLayoutComponent,
    UserLayoutComponent,
    LoginComponent,
    EditBookModalComponent,
    NewBookModalComponent,
    FeedbackRatingModalComponent
  ],
  imports: [
    routing,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule

  ],
  providers: [
    AuthGuard,
    BookService,
    AppConfig
  ],
  bootstrap: [AppComponent],
  exports: [
    CategoryComponent,
    HomeComponent,
    MyBooksComponent,
    PublicLayoutComponent,
    UserLayoutComponent,
    LoginComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
