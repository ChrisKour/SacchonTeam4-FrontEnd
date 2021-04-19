import { PatientService } from './../patient.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sacchon-patient-past-measurements',
  templateUrl: './patient-past-measurements.component.html',
  styleUrls: ['./patient-past-measurements.component.scss']
})
export class PatientPastMeasurementsComponent implements OnInit {

  form: FormGroup;
  hasClickedGlucose = true;
  hasClickedCarb = true;

  constructor(private fb : FormBuilder, private service: PatientService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required]
    });
  }

  getAverageGlucose() {

  }

  getAverageCarbIntake() {
    
  }

}
