import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveDoctorsComponent } from './inactive-doctors.component';

describe('InactiveDoctorsComponent', () => {
  let component: InactiveDoctorsComponent;
  let fixture: ComponentFixture<InactiveDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactiveDoctorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
