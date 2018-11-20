import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBooksComponent } from './my-books.component';
import { LentComponent } from './lent/lent.component';
import { PendingComponent } from './pending/pending.component';
import { MineComponent } from './mine/mine.component';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from 'src/app/app.config';
import { BookService } from 'src/app/services/book.service';
import { LoanModalComponent } from '../loan-modal/loan-modal.component';
import { FeedbackRatingModalComponent } from '../feedback-rating-modal/feedback-rating-modal.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UserRatingComponent } from '../user-rating/user-rating.component';
import { UserService } from 'src/app/services/user.service';

describe('MyBooksComponent', () => {
  let component: MyBooksComponent;
  let fixture: ComponentFixture<MyBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MyBooksComponent,
        LentComponent,
        PendingComponent,
        MineComponent,
        LoanModalComponent,
        FeedbackRatingModalComponent,
        UserRatingComponent,
      ],
      imports: [
        HttpClientModule,
        MDBBootstrapModule.forRoot(),
      ],
      providers: [
        AppConfig,
        BookService,
        UserService,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
