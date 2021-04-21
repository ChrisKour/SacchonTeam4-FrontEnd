import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChiefDoctorService } from './../chief-doctor.service';
import { Patient } from './../../patient/patient';
import { Component, OnInit } from '@angular/core';
import { DateValidator } from 'src/app/patient/date-validator';

@Component({
  selector: 'sacchon-inactive-patients',
  templateUrl: './inactive-patients.component.html',
  styleUrls: ['./inactive-patients.component.scss']
})
export class InactivePatientsComponent implements OnInit {

  patients: Patient[];
  dateForm: FormGroup;

  constructor(private service: ChiefDoctorService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.dateForm = this.fb.group({
      fromDate: ['', [Validators.required, DateValidator.ptDate]],
      toDate: ['', [Validators.required, DateValidator.ptDate]]
    });
  }

  getInactivePatients() {
    this.service.getInactivePatients(this.dateForm.get('fromDate').value, this.dateForm.get('toDate').value).subscribe(data =>
    {
      this.patients = <Patient[]>data.data;
      this.dateForm.reset();
    });
  }
}
