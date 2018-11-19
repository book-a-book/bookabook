import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingComponent } from './pending.component';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from 'src/app/app.config';

describe('PendingComponent', () => {
  let component: PendingComponent;
  let fixture: ComponentFixture<PendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingComponent],
      imports: [HttpClientModule],
      providers: [AppConfig],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
