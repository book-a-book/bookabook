import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookRequestModalComponent } from './book-request-modal.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'angular-bootstrap-md';

describe('BookRequestModalComponent', () => {
  let component: BookRequestModalComponent;
  let fixture: ComponentFixture<BookRequestModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookRequestModalComponent],
      imports: [FormsModule, ModalModule.forRoot()]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRequestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
