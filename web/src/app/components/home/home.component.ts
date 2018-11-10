import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public imagesUrl;

  constructor() { }

  ngOnInit() {
    this.imagesUrl = [
      'assets/images/Image_1.png',
      'assets/images/Image_2.png',
      'assets/images/Image_3.png',
      'assets/images/Image_4.png',
      'assets/images/Image_5.png',
      // 'assets/images/Image_6.png',
    ];
  }

}
