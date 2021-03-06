import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormComponent } from './register-form.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'angular-bootstrap-md';
import { AuthenticationService } from "../../services/authentication.service";
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AppConfig } from 'src/app/app.config';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterFormComponent],
      imports: [FormsModule, ModalModule.forRoot(), HttpClientModule, RouterTestingModule],
      providers: [
        AuthenticationService,
        AppConfig,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
