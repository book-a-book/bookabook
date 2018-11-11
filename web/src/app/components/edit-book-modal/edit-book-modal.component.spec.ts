import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookModalComponent } from './edit-book-modal.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'angular-bootstrap-md';


describe('EditBookModalComponent', () => {
  let component: EditBookModalComponent;
  let fixture: ComponentFixture<EditBookModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditBookModalComponent],
      imports: [FormsModule, ModalModule.forRoot()]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
