import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanModalComponent } from './loan-modal.component';
import { ModalModule, MDBBootstrapModule } from 'angular-bootstrap-md';

describe('LoanModalComponent', () => {
  let component: LoanModalComponent;
  let fixture: ComponentFixture<LoanModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoanModalComponent],
      imports: [MDBBootstrapModule.forRoot(), ModalModule.forRoot()]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
