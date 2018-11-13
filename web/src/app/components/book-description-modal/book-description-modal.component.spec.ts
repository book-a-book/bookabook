import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookDescriptionModalComponent } from './book-description-modal.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'angular-bootstrap-md';

describe('BookDescriptionModalComponent', () => {
  let component: BookDescriptionModalComponent;
  let fixture: ComponentFixture<BookDescriptionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookDescriptionModalComponent],
      imports: [FormsModule, ModalModule.forRoot()]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDescriptionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
