import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { BookService } from 'src/app/services/book.service';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from 'src/app/app.config';
import { LoanModalComponent } from '../loan-modal/loan-modal.component';
import { ModalModule } from 'angular-bootstrap-md';
import { FeedbackRatingModalComponent } from '../feedback-rating-modal/feedback-rating-modal.component';
import { UserRatingComponent } from '../user-rating/user-rating.component';
import { UserService } from 'src/app/services/user.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        LoanModalComponent,
        FeedbackRatingModalComponent,
        UserRatingComponent,
      ],
      imports: [
        HttpClientModule,
        ModalModule.forRoot(),
      ],
      providers: [
        BookService,
        AppConfig,
        UserService,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
