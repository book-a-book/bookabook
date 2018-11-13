import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { MyBooksComponent } from './components/my-books/my-books.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { routing } from './app.routing';
import { AuthGuard } from './guards/auth.guard';
import { EditBookModalComponent } from './components/edit-book-modal/edit-book-modal.component';
import { NewBookModalComponent } from './components/new-book-modal/new-book-modal.component';
import { FeedbackRatingModalComponent } from './components/feedback-rating-modal/feedback-rating-modal.component'
import { MDBBootstrapModule, ModalModule } from 'angular-bootstrap-md';
import { BookService } from './services/book.service';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from './app.config';
import { AuthenticationService } from './services/authentication.service';
import { LoginComponent } from './components/login/login.component';
import { LoanModalComponent } from './components/loan-modal/loan-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HomeComponent,
    MyBooksComponent,
    LoginComponent,
    PublicLayoutComponent,
    UserLayoutComponent,
    LoginComponent,
    FeedbackRatingModalComponent,
    EditBookModalComponent,
    NewBookModalComponent,
    FeedbackRatingModalComponent,
    LoanModalComponent,
  ],
  imports: [
    routing,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthGuard,
    BookService,
    AppConfig,
    AuthenticationService,
  ],
  bootstrap: [AppComponent],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
