import { TimeValidator } from './../time-validator';
import { PatientService } from './../patient.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DateValidator } from '../date-validator';

@Component({
  selector: 'sacchon-patient-add-measurement',
  templateUrl: './patient-add-measurement.component.html',
  styleUrls: ['./patient-add-measurement.component.scss']
})
export class PatientAddMeasurementComponent implements OnInit {

  measurementForm: FormGroup;

  constructor(private fb: FormBuilder, private service: PatientService, private router: Router) { }

  ngOnInit(): void {
    this.measurementForm = this.fb.group({
      date: ['', [Validators.required, DateValidator.ptDate]],
      time: ['', [Validators.required, TimeValidator.ptTime]],
      glucoseLevel: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      carbIntake: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  submitMeasurement() {
    console.log(this.measurementForm.value);
    this.service.addPatientMeasurement(this.measurementForm.value).subscribe(data =>
      {
        alert(data.description);
        if (data.code == 200) {
          this.measurementForm.reset();
        }
      });
  }
}
