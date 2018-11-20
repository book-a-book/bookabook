import { Component, ViewChild } from '@angular/core';
import { LentComponent } from './lent/lent.component';
import { PendingComponent } from './pending/pending.component';
import { MineComponent } from './mine/mine.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.scss']
})
export class MyBooksComponent {

  @ViewChild('pending') pendingComponent: PendingComponent;
  @ViewChild('lent') lentComponent: LentComponent;
  @ViewChild('mine') mineComponent: MineComponent;

  constructor(private userService: UserService) {
    this.userService.getAll()
      .subscribe(users => this.processUsers(users))
  }

  processUsers(users) {
    this.pendingComponent.users = users;
    this.lentComponent.users = users;
    this.mineComponent.users = users;
  }

}
