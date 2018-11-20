import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { BookService } from 'src/app/services/book.service';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from 'src/app/app.config';
import { LoanModalComponent } from '../loan-modal/loan-modal.component';
import { ModalModule } from 'angular-bootstrap-md';
import { FeedbackRatingModalComponent } from '../feedback-rating-modal/feedback-rating-modal.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, LoanModalComponent, FeedbackRatingModalComponent],
      imports: [HttpClientModule, ModalModule.forRoot()],
      providers: [BookService, AppConfig]
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
