import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackRatingModalComponent } from './feedback-rating-modal.component';

describe('FeedbackRatingModalComponent', () => {
  let component: FeedbackRatingModalComponent;
  let fixture: ComponentFixture<FeedbackRatingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackRatingModalComponent ]
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
