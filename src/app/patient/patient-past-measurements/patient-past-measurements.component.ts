import { PatientService } from './../patient.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DateValidator } from '../date-validator';

@Component({
  selector: 'sacchon-patient-past-measurements',
  templateUrl: './patient-past-measurements.component.html',
  styleUrls: ['./patient-past-measurements.component.scss']
})
export class PatientPastMeasurementsComponent implements OnInit {

  form: FormGroup;
  averageGlucose;
  averageCarb;

  constructor(private fb : FormBuilder, private service: PatientService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      from: ['', [Validators.required, DateValidator.ptDate]],
      to: ['', [Validators.required, DateValidator.ptDate]]
    });
  }

  getAverageGlucose() {
    this.averageCarb = null;
    this.service.getAverageMeasurement(this.form.get('from').value, this.form.get('to').value, "glucose").subscribe (data => {
      console.log(data);
      this.averageGlucose = data.data;
    });
  }

  getAverageCarbIntake() {
    this.averageGlucose = null;
    this.service.getAverageMeasurement(this.form.get('from').value, this.form.get('to').value, "carb").subscribe (data => {
      console.log(data);
      this.averageCarb = data.data;
    });
  }

}
