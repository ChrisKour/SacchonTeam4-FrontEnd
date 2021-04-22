import { DoctorService } from './../doctor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';

@Component({
  selector: 'sacchon-doctor-landing-page',
  templateUrl: './doctor-landing-page.component.html',
  styleUrls: ['./doctor-landing-page.component.scss']
})
export class DoctorLandingPageComponent implements OnInit {

  doctor: Doctor;
  clickedManageAccount = false;
  clickedPatientRecords = false;
  clickedPatientsWaiting = false;
  clickedProvideConsultation = false;
  clickedUpdateConsultation = false;

  constructor(private service: DoctorService, private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("role") != "doctor"){
      this.router.navigate([sessionStorage.getItem("role")])
      return;
    }
  }

  manageAccount(): void {
    this.clickedPatientRecords = false;
    this.clickedPatientsWaiting = false;
    this.clickedProvideConsultation = false;
    this.clickedUpdateConsultation = false;
    this.clickedManageAccount = true;
  }

  viewPatientRecords(): void {
    this.clickedManageAccount = false;
    this.clickedPatientsWaiting = false;
    this.clickedProvideConsultation = false;
    this.clickedUpdateConsultation = false;
    this.clickedPatientRecords = true;
  }

  viewWaitingPatients(): void {
    this.clickedManageAccount = false;
    this.clickedPatientRecords = false;
    this.clickedProvideConsultation = false;
    this.clickedUpdateConsultation = false;
    this.clickedPatientsWaiting = true;
  }

  consultPatient(): void {
    this.clickedManageAccount = false;
    this.clickedPatientRecords = false;
    this.clickedPatientsWaiting = false;
    this.clickedUpdateConsultation = false;
    this.clickedProvideConsultation = true;
  }

  modifyConsultation(): void {
    this.clickedManageAccount = false;
    this.clickedPatientRecords = false;
    this.clickedProvideConsultation = false;
    this.clickedPatientsWaiting = false;
    this.clickedUpdateConsultation = true;
  }
}
