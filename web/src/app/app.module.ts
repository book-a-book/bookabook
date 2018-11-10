import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { MyBooksComponent } from './components/my-books/my-books.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { LoginComponent } from './components/login/login.component';
import { routing } from './app.routing';
import { AuthGuard } from './guards/auth.guard';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HomeComponent,
    MyBooksComponent,
    PublicLayoutComponent,
    UserLayoutComponent,
    LoginComponent,
  ],
  imports: [
    routing,
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
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
})
export class AppModule { }
