import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiefDoctorLandingPageComponent } from './chief-doctor-landing-page.component';

describe('ChiefDoctorLandingPageComponent', () => {
  let component: ChiefDoctorLandingPageComponent;
  let fixture: ComponentFixture<ChiefDoctorLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiefDoctorLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiefDoctorLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
