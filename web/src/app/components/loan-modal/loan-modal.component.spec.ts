import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanModalComponent } from './loan-modal.component';
import { ModalModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { FeedbackRatingModalComponent } from '../feedback-rating-modal/feedback-rating-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from 'src/app/app.config';

describe('LoanModalComponent', () => {
  let component: LoanModalComponent;
  let fixture: ComponentFixture<LoanModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoanModalComponent,
        FeedbackRatingModalComponent,
      ],
      imports: [
        MDBBootstrapModule.forRoot(),
        ModalModule.forRoot(),
        HttpClientModule,
      ],
      providers: [
        AppConfig,
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
