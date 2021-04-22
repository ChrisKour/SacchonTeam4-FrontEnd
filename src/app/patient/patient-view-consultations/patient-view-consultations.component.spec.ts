import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientViewConsultationsComponent } from './patient-view-consultations.component';

describe('PatientViewConsultationsComponent', () => {
  let component: PatientViewConsultationsComponent;
  let fixture: ComponentFixture<PatientViewConsultationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientViewConsultationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientViewConsultationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
