import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPastMeasurementsComponent } from './edit-past-measurements.component';

describe('EditPastMeasurementsComponent', () => {
  let component: EditPastMeasurementsComponent;
  let fixture: ComponentFixture<EditPastMeasurementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPastMeasurementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPastMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
