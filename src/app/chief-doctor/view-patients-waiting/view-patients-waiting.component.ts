import { Consultation } from './../consultation';
import { Measurement } from './../../patient/measurement';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Patient } from 'src/app/patient/patient';
import { ChiefDoctorService } from '../chief-doctor.service';

@Component({
  selector: 'sacchon-view-patients-waiting',
  templateUrl: './view-patients-waiting.component.html',
  styleUrls: ['./view-patients-waiting.component.scss']
})
export class ViewPatientsWaitingComponent implements OnInit {

  patients: Patient[];
  idOfSelectedPatient = -1;
  isPatientClicked = false;
  consultationDays: string;

  constructor(private fb: FormBuilder, private service: ChiefDoctorService) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    this.service.getPatientsWaiting().subscribe(data => {
      console.log(data)
      this.patients = <Patient[]>data.data;
    });
  }

  getLastConsultationDate(id: number) {
    this.isPatientClicked = true;
    this.idOfSelectedPatient = id;
    this.service.getPatientLastConsultation(id + '').subscribe(data => {
      console.log(data);
      if (data.code == 200) {
        let consultation = <Consultation>data.data;
        let dateArray = consultation.creationDate.split('/');
        let consultationDate = new Date(dateArray[1]+'/'+dateArray[0]+'/'+dateArray[2]);
        let difference_In_Time = new Date().getTime() - consultationDate.getTime();
        let difference_In_Days = difference_In_Time / (1000 * 3600 * 24);
        this.consultationDays = "This patient has not had a consultation for "  + Math.round(difference_In_Days) + " days";
      }
      if (data.code == 201) {
        let measurement = <Measurement>data.data;
        let dateArray = measurement.date.split('/');
        let measurementDate = new Date(dateArray[1]+'/'+dateArray[0]+'/'+dateArray[2]);
        let difference_In_Time = new Date().getTime() - measurementDate.getTime();
        let difference_In_Days = difference_In_Time / (1000 * 3600 * 24);
        this.consultationDays = "This patient has never had a consultation and his first measurement was " + Math.round(difference_In_Days) + " days ago";
      } else if (data.code == 400) {
        this.consultationDays = "This patient has never had a consultation or uploaded a measurement."
      }
    });
  }
}
