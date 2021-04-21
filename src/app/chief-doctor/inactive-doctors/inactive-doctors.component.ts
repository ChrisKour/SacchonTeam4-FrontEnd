import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DateValidator } from 'src/app/patient/date-validator';
import { ChiefDoctorService } from '../chief-doctor.service';
import { Doctor } from '../doctor';

@Component({
  selector: 'sacchon-inactive-doctors',
  templateUrl: './inactive-doctors.component.html',
  styleUrls: ['./inactive-doctors.component.scss']
})
export class InactiveDoctorsComponent implements OnInit {

  doctors: Doctor[];
  dateForm: FormGroup;

  constructor(private service: ChiefDoctorService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.dateForm = this.fb.group({
      fromDate: ['', [Validators.required, DateValidator.ptDate]],
      toDate: ['', [Validators.required, DateValidator.ptDate]]
    });
  }

  getInactiveDoctors() {
    this.service.getInactiveDoctors(this.dateForm.get('fromDate').value, this.dateForm.get('toDate').value).subscribe(data =>
    {
      this.doctors = <Doctor[]>data.data;
      this.dateForm.reset();
    });
  }
}
