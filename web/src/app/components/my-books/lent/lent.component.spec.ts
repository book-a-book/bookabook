import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LentComponent } from './lent.component';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from 'src/app/app.config';
import { BookService } from 'src/app/services/book.service';
import { LoanModalComponent } from '../../loan-modal/loan-modal.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule, ModalModule } from 'angular-bootstrap-md';

describe('LentComponent', () => {
  let component: LentComponent;
  let fixture: ComponentFixture<LentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LentComponent,
        LoanModalComponent,
      ],
      imports: [
        MDBBootstrapModule.forRoot(),
        ModalModule.forRoot(),
        HttpClientModule,
      ],
      providers: [
        AppConfig,
        BookService,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
