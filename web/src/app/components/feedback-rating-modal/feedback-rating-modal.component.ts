import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'feedback-rating',
  templateUrl: './feedback-rating-modal.component.html',
  styleUrls: ['./feedback-rating-modal.component.scss']
})
export class FeedbackRatingModalComponent {

  @Input() rating: number = 3;
  @Input() itemId: number = 3;
  @Output() ratingClick: EventEmitter<Number> = new EventEmitter();

  constructor() { }

  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit(rating);
  }
}
