import { PatientService } from './../patient.service';
import { Patient } from '../patient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sacchon-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  patients: Patient[];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    
  }

  getPatients() {
    this.patients = [];
    this.patientService.getPatients().subscribe(response => {
      this.patients = response;
      console.log(this.patients);
    });
  }

}
