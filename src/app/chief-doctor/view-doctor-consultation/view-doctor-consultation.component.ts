import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateValidator } from 'src/app/patient/date-validator';
import { Measurement } from 'src/app/patient/measurement';
import { ChiefDoctorService } from '../chief-doctor.service';
import { Consultation } from '../consultation';
import { Doctor } from '../doctor';

@Component({
  selector: 'sacchon-view-doctor-consultation',
  templateUrl: './view-doctor-consultation.component.html',
  styleUrls: ['./view-doctor-consultation.component.scss']
})
export class ViewDoctorConsultationComponent implements OnInit {

  doctorForm: FormGroup;
  doctors: Doctor[];
  idOfSelectedDoctor = -1;
  isDoctorClicked = false;
  dataSent = false;
  consultations: Consultation[];

  constructor(private fb: FormBuilder, private service: ChiefDoctorService) { }

  ngOnInit(): void {
    this.doctorForm = this.fb.group({
      fromDate: ['', [Validators.required, DateValidator.ptDate]],
      toDate: ['', [Validators.required, DateValidator.ptDate]]
    });
    this.getDoctors();
  }

  getDoctors() {
    this.service.getAllDoctors().subscribe(data => {
      console.log(data);
      this.doctors = <Doctor[]>data.data;
    });
  }

  getDoctorConsultations(id: number) {
    this.dataSent = true;
    this.service.getDoctorConsultations(id + '', this.doctorForm.get('fromDate').value, this.doctorForm.get('toDate').value).subscribe(data => {
      if (data.code == 400) {
        alert(data.description)
      } else {
        console.log(data)
        this.consultations = <Consultation[]>data.data;
        
        this.doctorForm.reset();
      }
    });
  }

  openDateForm(id: number) {
    this.isDoctorClicked = !this.isDoctorClicked;
    this.dataSent = false;
    this.idOfSelectedDoctor = id;
    this.consultations = null;
  }
}
