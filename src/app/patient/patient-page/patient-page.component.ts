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
  clickedManage = false;
  clickedAverages = false;
  clickedNewMeasurement = false;
  clickedPastMeasurements = false;

  constructor(private service: PatientService, private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("role") != "patient"){
      this.router.navigate([sessionStorage.getItem("role")])
      return;
    }
    this.updatePatientLastLogin();
  }

  updatePatientLastLogin() {
    let date = {
      "date" : new Date().toLocaleDateString(),
      "time" : new Date().toLocaleTimeString()
    }
    this.service.updatePatientLastLogin(date, sessionStorage.getItem('id')).subscribe();
  }

  manageAccount() {
    this.clickedAverages = false;
    this.clickedNewMeasurement = false;
    this.clickedPastMeasurements = false;
    this.clickedManage = true;
  }

  storeNewMeasurement() {
    this.clickedAverages = false;
    this.clickedManage = false;
    this.clickedPastMeasurements = false;
    this.clickedNewMeasurement = true;
  }

  viewPastAverages() {
    this.clickedManage = false;
    this.clickedPastMeasurements = false;
    this.clickedNewMeasurement = false;
    this.clickedAverages = true;
  }

  editPastMeasurements() {
    this.clickedManage = false;
    this.clickedNewMeasurement = false;
    this.clickedAverages = false;
    this.clickedPastMeasurements = true;
  }
}
