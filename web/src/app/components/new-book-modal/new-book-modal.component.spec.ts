import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBookModalComponent } from './new-book-modal.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'angular-bootstrap-md';

describe('NewBookModalComponent', () => {
  let component: NewBookModalComponent;
  let fixture: ComponentFixture<NewBookModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewBookModalComponent],
      imports: [FormsModule, ModalModule.forRoot()]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBookModalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
