import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPatientsWithoutConsulComponent } from './view-patients-without-consul.component';

describe('ViewPatientsWithoutConsulComponent', () => {
  let component: ViewPatientsWithoutConsulComponent;
  let fixture: ComponentFixture<ViewPatientsWithoutConsulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPatientsWithoutConsulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPatientsWithoutConsulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
