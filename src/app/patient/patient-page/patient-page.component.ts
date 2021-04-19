import { Router } from '@angular/router';
import { PatientService } from './../patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';

@Component({
  selector: 'sacchon-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.scss']
})
export class PatientPageComponent implements OnInit {

  patient: Patient;

  constructor(private service: PatientService, private router: Router) { }

  ngOnInit(): void {
  }

  manageAccount() {
    this.router.navigate(['patientaccount']);
  }

  storeNewMeasurement() {
    this.router.navigate(['patientaddmeasurement']);
  }

  viewPastMeasurements() {
    this.router.navigate(['patientpastmeasurements']);
  }
}
