import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackRatingModalComponent } from './feedback-rating-modal.component';

import { FormsModule } from '@angular/forms';
import { ModalModule, MDBBootstrapModule } from 'angular-bootstrap-md';

describe('FeedbackRatingModalComponent', () => {
  let component: FeedbackRatingModalComponent;
  let fixture: ComponentFixture<FeedbackRatingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackRatingModalComponent],
      imports: [FormsModule, MDBBootstrapModule.forRoot(), ModalModule.forRoot()]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackRatingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
