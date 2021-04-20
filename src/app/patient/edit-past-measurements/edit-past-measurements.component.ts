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
  isMeasurementNotNull = true;
  idOfSelectedMeasurement = -1;

  constructor(private service: PatientService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadData();
    this.isMeasurementNotNull = !(this.measurements == null);
    this.editMeasurementForm = this.fb.group({
      date: ['', [Validators.required, DateValidator.ptDate]],
      time: ['', [Validators.required, TimeValidator.ptTime]],
      glucoseLevel: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      carbIntake: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }


  loadData() {
    this.service.getAllPastMeasurements().subscribe(data => {
      this.measurements = <Measurement[]>data.data;
    }
    );
  }

  deleteMeasurement(id: number) {
    this.isSortedClicked = false;
    this.service.deleteMeasurement(id + '').subscribe(response => {
      alert(response.description);
      if (response.code == 200) {
        this.loadData();
      }
    });
  }

  openEditForm(id: number) {
    this.isSortedClicked = !this.isSortedClicked;
    this.idOfSelectedMeasurement = id;
  }

  editMeasurement(id: number) {
    this.service.editPatientMeasurement(id + '', this.editMeasurementForm.value).subscribe(data => {
      alert(data.description);
      if (data.code == 200) {
        this.editMeasurementForm.reset();
        this.isSortedClicked = false;
        this.loadData();
      }
    });
  }
}
