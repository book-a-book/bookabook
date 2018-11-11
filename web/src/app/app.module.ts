import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { FeedbackRatingModalComponent } from './components/feedback-rating-modal/feedback-rating-modal.component'
import { MDBBootstrapModule, ModalModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HomeComponent,
    MyBooksComponent,
    PublicLayoutComponent,
    UserLayoutComponent,
    LoginComponent,
    FeedbackRatingModalComponent
  ],
  imports: [
    routing,
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [
    AuthGuard,
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
