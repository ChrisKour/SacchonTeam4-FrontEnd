import { Patient } from './../../patient/patient';
import { ChiefDoctorService } from './../chief-doctor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sacchon-view-patient-data',
  templateUrl: './view-patient-data.component.html',
  styleUrls: ['./view-patient-data.component.scss']
})
export class ViewPatientDataComponent implements OnInit {

  patientForm: FormGroup;
  patients: Patient[];

  constructor(private fb: FormBuilder, private service: ChiefDoctorService) { }

  ngOnInit(): void {
    this.patientForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.getPatientData();
  }

  getPatientData() {
    this.service.getAllPatients().subscribe(data => {
      this.patients = <Patient[]>data.data;
    });
  }
}
