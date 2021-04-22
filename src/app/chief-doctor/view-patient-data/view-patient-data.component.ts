import { Measurement } from './../../patient/measurement';
import { Patient } from './../../patient/patient';
import { ChiefDoctorService } from './../chief-doctor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DateValidator } from 'src/app/patient/date-validator';

@Component({
  selector: 'sacchon-view-patient-data',
  templateUrl: './view-patient-data.component.html',
  styleUrls: ['./view-patient-data.component.scss']
})
export class ViewPatientDataComponent implements OnInit {

  patientForm: FormGroup;
  patients: Patient[];
  idOfSelectedPatient = -1;
  isPatientClicked = false;
  dataSent = false;
  measurements: Measurement[];

  constructor(private fb: FormBuilder, private service: ChiefDoctorService) { }

  ngOnInit(): void {
    this.patientForm = this.fb.group({
      fromDate: ['', [Validators.required, DateValidator.ptDate]],
      toDate: ['', [Validators.required, DateValidator.ptDate]]
    });
    this.getPatients();
  }

  getPatients() {
    this.service.getAllPatients().subscribe(data => {
      console.log(data);
      this.patients = <Patient[]>data.data;
    });
  }

  getPatientData(id: number) {
    this.dataSent = true;
    this.service.getPatientPastData(id + '', this.patientForm.get('fromDate').value, this.patientForm.get('toDate').value).subscribe(data => {
      if (data.code == 400) {
        alert(data.description)
      } else {
        this.measurements = <Measurement[]>data.data;
        this.patientForm.reset();
      }
    });
  }

  openDateForm(id: number) {
    this.isPatientClicked = !this.isPatientClicked;
    this.dataSent = false;
    this.idOfSelectedPatient = id;
    this.measurements = null;
  }
}
