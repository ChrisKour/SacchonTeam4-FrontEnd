import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInsertComponent } from './patient-insert.component';

describe('PatientInsertComponent', () => {
  let component: PatientInsertComponent;
  let fixture: ComponentFixture<PatientInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
