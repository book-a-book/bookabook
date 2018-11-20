import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models';

@Component({
  selector: 'user-rating',
  templateUrl: './user-rating.component.html',
  styleUrls: ['./user-rating.component.scss']
})
export class UserRatingComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
