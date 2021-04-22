import { Consultation } from './../../chief-doctor/consultation';
import { ChiefDoctorService } from './../../chief-doctor/chief-doctor.service';
import { Measurement } from './../../patient/measurement';
import { DoctorService } from './../doctor.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/patient/patient';

@Component({
  selector: 'sacchon-view-patient-records',
  templateUrl: './view-patient-records.component.html',
  styleUrls: ['./view-patient-records.component.scss']
})
export class ViewPatientRecordsComponent implements OnInit {

  patients: Patient[];
  isPatientClicked = false;
  idOfSelectedPatient = -1;
  measurements: Measurement[];
  consultations: Consultation[];

  constructor(private service: DoctorService, private chiefService: ChiefDoctorService) { }

  ngOnInit(): void {
    this.getAssignedAndUnassignedPatients();
  }

  getAssignedAndUnassignedPatients(): void {
    this.service.getAssignedAndUnassignedPatients().subscribe(data => {
      if(data.code == 200) {
        this.patients = <Patient[]>data.data;
      }
      else{
        alert(data.description);
      }
    });
  }

  selectPatient(id: number) {
    this.isPatientClicked = true;
    this.consultations = null;
    this.measurements = null;
    this.idOfSelectedPatient = id;
    console.log(this.idOfSelectedPatient)
  }

  getPatientMeasurements(id: number) {
    this.consultations = null;
    this.measurements = null;
    this.service.getPatientMeasurements(id + '').subscribe(data => {
      if (data.code == 400) {
        alert(data.description);
      } else {
        this.measurements = <Measurement[]>data.data;
      }
    });
  }

  getPatientConsultations(id: number) {
    this.consultations = null;
    this.measurements = null;
    this.service.getPatientConsultations(id + '').subscribe(data => {
      if (data.code == 400) {
        alert(data.description);
      } else {
        console.log(data.data)
        this.consultations = <Consultation[]>data.data;
      }
    });
  }

}
