import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanModalComponent } from './loan-modal.component';
import { ModalModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { FeedbackRatingModalComponent } from '../feedback-rating-modal/feedback-rating-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from 'src/app/app.config';
import { LoanService } from 'src/app/services/loan.service';
import { BookService } from 'src/app/services/book.service';
import { UserRatingComponent } from '../user-rating/user-rating.component';

describe('LoanModalComponent', () => {
  let component: LoanModalComponent;
  let fixture: ComponentFixture<LoanModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoanModalComponent,
        FeedbackRatingModalComponent,
        UserRatingComponent,
      ],
      imports: [
        MDBBootstrapModule.forRoot(),
        ModalModule.forRoot(),
        HttpClientModule,
      ],
      providers: [
        AppConfig,
        LoanService,
        BookService,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
