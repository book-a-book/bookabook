import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineComponent } from './mine.component';
import { BookService } from 'src/app/services/book.service';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from 'src/app/app.config';

describe('MineComponent', () => {
  let component: MineComponent;
  let fixture: ComponentFixture<MineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MineComponent],
      imports: [
        HttpClientModule,
      ],
      providers: [
        AppConfig,
        BookService,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
