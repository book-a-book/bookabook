import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingComponent } from './pending.component';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from 'src/app/app.config';
import { LoanModalComponent } from '../../loan-modal/loan-modal.component';
import { MDBBootstrapModule, ModalModule } from 'angular-bootstrap-md';
import { FeedbackRatingModalComponent } from '../../feedback-rating-modal/feedback-rating-modal.component';

describe('PendingComponent', () => {
  let component: PendingComponent;
  let fixture: ComponentFixture<PendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PendingComponent,
        LoanModalComponent,
        FeedbackRatingModalComponent,
      ],
      imports: [
        HttpClientModule,
        MDBBootstrapModule.forRoot(),
        ModalModule.forRoot(),
      ],
      providers: [AppConfig],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
