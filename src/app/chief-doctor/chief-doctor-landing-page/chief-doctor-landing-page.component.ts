import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sacchon-chief-doctor-landing-page',
  templateUrl: './chief-doctor-landing-page.component.html',
  styleUrls: ['./chief-doctor-landing-page.component.scss']
})
export class ChiefDoctorLandingPageComponent implements OnInit {

  clickedPatientData = false;
  clickedDoctorsConsulations = false;
  clickedWaitingPatients = false;
  clickedInactivePatients = false;
  clickedInactiveDoctors = false;

  constructor() { }

  ngOnInit(): void {
  }

  viewPatientData() {
    this.clickedDoctorsConsulations = false;
    this.clickedWaitingPatients = false;
    this.clickedInactivePatients = false;
    this.clickedInactiveDoctors = false;
    this.clickedPatientData = true;
  }

  viewDoctorConsultations() {
    this.clickedPatientData = false;
    this.clickedWaitingPatients = false;
    this.clickedInactivePatients = false;
    this.clickedInactiveDoctors = false;
    this.clickedDoctorsConsulations = true;
  }

  viewWaitingPatients() {
    this.clickedPatientData = false;
    this.clickedDoctorsConsulations = false;
    this.clickedInactivePatients = false;
    this.clickedInactiveDoctors = false;
    this.clickedWaitingPatients = true;
  }

  viewInactivePatients() {
    this.clickedPatientData = false;
    this.clickedDoctorsConsulations = false;
    this.clickedWaitingPatients = false;
    this.clickedInactiveDoctors = false;
    this.clickedInactivePatients = true;
  }

  viewInactiveDoctors() {
    this.clickedPatientData = false;
    this.clickedDoctorsConsulations = false;
    this.clickedWaitingPatients = false;
    this.clickedInactivePatients = false;
    this.clickedInactiveDoctors = true;
  }
}
