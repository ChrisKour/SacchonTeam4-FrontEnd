import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAddMeasurementComponent } from './patient-add-measurement.component';

describe('PatientAddMeasurementComponent', () => {
  let component: PatientAddMeasurementComponent;
  let fixture: ComponentFixture<PatientAddMeasurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAddMeasurementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAddMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
