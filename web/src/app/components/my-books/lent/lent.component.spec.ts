import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LentComponent } from './lent.component';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from 'src/app/app.config';
import { BookService } from 'src/app/services/book.service';

describe('LentComponent', () => {
  let component: LentComponent;
  let fixture: ComponentFixture<LentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LentComponent],
      imports: [HttpClientModule],
      providers: [AppConfig, BookService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
