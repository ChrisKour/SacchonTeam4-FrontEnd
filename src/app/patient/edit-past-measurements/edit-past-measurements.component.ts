import { PatientService } from './../patient.service';
import { Measurement } from './../measurement';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TimeValidator } from '../time-validator';
import { DateValidator } from '../date-validator';

@Component({
  selector: 'sacchon-edit-past-measurements',
  templateUrl: './edit-past-measurements.component.html',
  styleUrls: ['./edit-past-measurements.component.scss']
})
export class EditPastMeasurementsComponent implements OnInit {

  measurements: Measurement[];
  isSortedClicked = false;
  editMeasurementForm: FormGroup;

  constructor(private service: PatientService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadData();
    this.editMeasurementForm = this.fb.group({
      date: ['', [Validators.required, DateValidator.ptDate]],
      time: ['', [Validators.required, TimeValidator.ptTime]],
      glucoseLevel: ['', Validators.required],
      carbIntake: ['', Validators.required]
    });
  }

  loadData() {
    this.service.getAllPastMeasurements().subscribe(data => {
      this.measurements = <Measurement[]>data.data;
    }
    );
  }

  deleteMeasurement(uri: string) {
    this.isSortedClicked = false;
    let uriParts = uri.split('/');
    console.log()
    this.service.deleteMeasurement(uriParts[uriParts.length - 1]).subscribe(response => {
      alert(response.description);
      if (response.code == 200) {
        this.loadData();
      }

    });
  }

  openEditForm() {
    this.isSortedClicked = !this.isSortedClicked;
  }

  editMeasurement(uri: string) {
    let uriParts = uri.split('/');
    this.service.editPatientMeasurement(uriParts[uriParts.length - 1], this.editMeasurementForm.value).subscribe(data => {
      alert(data.description);
      if (data.code == 200) {
        this.editMeasurementForm.reset();
        this.isSortedClicked = false;
        this.loadData();
      }
    });
  }
}
