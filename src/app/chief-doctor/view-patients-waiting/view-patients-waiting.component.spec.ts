import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPatientsWaitingComponent } from './view-patients-waiting.component';

describe('ViewPatientsWaitingComponent', () => {
  let component: ViewPatientsWaitingComponent;
  let fixture: ComponentFixture<ViewPatientsWaitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPatientsWaitingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPatientsWaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
