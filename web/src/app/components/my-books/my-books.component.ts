import { Component, OnInit, ViewChild } from '@angular/core';
import { LentComponent } from './lent/lent.component';
import { PendingComponent } from './pending/pending.component';
import { MineComponent } from './mine/mine.component';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.scss']
})
export class MyBooksComponent implements OnInit {

  @ViewChild('pending') pendingComponent: PendingComponent;
  @ViewChild('lent') lentComponent: LentComponent;
  @ViewChild('mine') mineComponent: MineComponent;

  constructor() { }

  ngOnInit() {
  }

}
