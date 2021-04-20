import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDoctorConsultationComponent } from './view-doctor-consultation.component';

describe('ViewDoctorConsultationComponent', () => {
  let component: ViewDoctorConsultationComponent;
  let fixture: ComponentFixture<ViewDoctorConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDoctorConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDoctorConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
