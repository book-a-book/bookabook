import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBooksComponent } from './my-books.component';
import { LentComponent } from './lent/lent.component';
import { PendingComponent } from './pending/pending.component';
import { MineComponent } from './mine/mine.component';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from 'src/app/app.config';
import { BookService } from 'src/app/services/book.service';

describe('MyBooksComponent', () => {
  let component: MyBooksComponent;
  let fixture: ComponentFixture<MyBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MyBooksComponent,
        LentComponent,
        PendingComponent,
        MineComponent,
      ],
      imports: [
        HttpClientModule
      ],
      providers: [
        AppConfig,
        BookService,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
