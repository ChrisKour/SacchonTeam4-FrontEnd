import { Subject } from 'rxjs';
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
  clickedNewMeasurement = true;
  clickedPastMeasurements = false;
  clickedConsultations = false;

  constructor(private service: PatientService, private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("role") != "patient"){
      this.router.navigate([sessionStorage.getItem("role")])
      return;
    }
    this.checkForUpdatedConsultations();
    this.updatePatientLastLogin();
  }

  checkForUpdatedConsultations(): void{
    this.service.checkForUpdatedConsultations().subscribe(data => {
      if (data.code == 200) {
        alert(data.description);
      }
    });
  }

  updatePatientLastLogin() {
    let date = {
      "date" : new Date().toLocaleDateString(),
      "time" : new Date().toLocaleTimeString()
    }
    this.service.updatePatientLastLogin(date, sessionStorage.getItem('id')).subscribe();
  }

  manageAccount(): void {
    this.clickedAverages = false;
    this.clickedNewMeasurement = false;
    this.clickedPastMeasurements = false;
    this.clickedConsultations = false;
    this.clickedManage = true;
  }

  storeNewMeasurement(): void {
    this.clickedAverages = false;
    this.clickedManage = false;
    this.clickedPastMeasurements = false;
    this.clickedConsultations = false;
    this.clickedNewMeasurement = true;
  }

  viewPastAverages(): void {
    this.clickedManage = false;
    this.clickedPastMeasurements = false;
    this.clickedNewMeasurement = false;
    this.clickedConsultations = false;
    this.clickedAverages = true;
  }

  editPastMeasurements(): void {
    this.clickedManage = false;
    this.clickedNewMeasurement = false;
    this.clickedAverages = false;
    this.clickedConsultations = false;
    this.clickedPastMeasurements = true;
  }

  viewConsultations(): void {
    this.clickedManage = false;
    this.clickedNewMeasurement = false;
    this.clickedPastMeasurements = false;
    this.clickedAverages = false;
    this.clickedConsultations = true;
  }
}
