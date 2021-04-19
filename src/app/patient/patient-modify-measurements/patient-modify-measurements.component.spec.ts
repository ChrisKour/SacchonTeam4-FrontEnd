import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientModifyMeasurementsComponent } from './patient-modify-measurements.component';

describe('PatientModifyMeasurementsComponent', () => {
  let component: PatientModifyMeasurementsComponent;
  let fixture: ComponentFixture<PatientModifyMeasurementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientModifyMeasurementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientModifyMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
