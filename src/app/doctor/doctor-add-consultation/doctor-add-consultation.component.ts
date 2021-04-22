
import { DoctorService } from './../doctor.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DateValidator } from '../date-validator';

@Component({
  selector: 'sacchon-doctor-add-consultation',
  templateUrl: './doctor-add-consultation.component.html',
  styleUrls: ['./doctor-add-consultation.component.scss']
})
export class DoctorAddConsultationComponent implements OnInit {
  consultationForm: FormGroup;

  constructor(private fb: FormBuilder, private service: DoctorService, private router: Router) { }

  ngOnInit(): void {
    this.consultationForm = this.fb.group({
      date: ['', [Validators.required, DateValidator.ptDate]],
      dosage: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      prescriptionName: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]]
    });
  }

  submitConsultation() {
    console.log(this.consultationForm.value);
    this.service.addConsultation(this.consultationForm.value).subscribe(data =>
      {
        alert(data.description);
        if (data.code == 200) {
          this.consultationForm.reset();
        }
      });
  }

}
