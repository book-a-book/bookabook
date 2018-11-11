import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'feedback-rating',
  templateUrl: './feedback-rating-modal.component.html',
  styleUrls: ['./feedback-rating-modal.component.scss']
})
export class FeedbackRatingModalComponent implements OnInit {

  @Input() rating: number = 3;
  @Input() itemId: number = 3;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

  inputName: string;
  comments: string = "";

  constructor() { }

  ngOnInit() {
    this.inputName = this.itemId + '_rating';
  }
  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating
    });
  }

  sendFeedback() {
    console.log(this);
  }

}
