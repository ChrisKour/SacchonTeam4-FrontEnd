import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPastMeasurementsComponent } from './patient-past-measurements.component';

describe('PatientPastMeasurementsComponent', () => {
  let component: PatientPastMeasurementsComponent;
  let fixture: ComponentFixture<PatientPastMeasurementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientPastMeasurementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPastMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
