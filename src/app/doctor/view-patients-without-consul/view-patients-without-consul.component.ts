import { Consultation } from './../../chief-doctor/consultation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patient } from 'src/app/patient/patient';
import { DoctorService } from '../doctor.service';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sacchon-view-patients-without-consul',
  templateUrl: './view-patients-without-consul.component.html',
  styleUrls: ['./view-patients-without-consul.component.scss']
})

export class ViewPatientsWithoutConsulComponent implements OnInit {

  patients: Patient[];
  idOfSelectedPatient = -1;
  isPatientClicked = false;
  clickedProvideConsultation = false;
  consultationForm: FormGroup;

  constructor(private fb: FormBuilder, private service: DoctorService) { }

  ngOnInit(): void {
    this.consultationForm = this.fb.group({
      dosage: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      prescriptionName: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]]
    });
    this.getPatients();
  }

  getPatients() {
    this.service.getPatientsWithNoConsul().subscribe(data => {
      if (data.code == 400) {
        alert(data.description);
      } else {
        this.patients = <Patient[]>data.data;
      }
    });
  }

  provideConsultations() {
    this.clickedProvideConsultation = true;
  }

  submitConsultation(id: number) {
    let consultation: Consultation = {
      id: 0,
      creationDate: new Date().toLocaleDateString(),
      creationTime: new Date().toLocaleTimeString(),
      dosage: this.consultationForm.get('dosage').value,
      prescriptionName: this.consultationForm.get('prescriptionName').value,
      patientId: id,
      modifiedDate: '',
      modifiedTime: ''
    }

    this.service.addConsultation(consultation).subscribe(data => {
      alert(data.description);
      if (data.code == 200) {
        this.consultationForm.reset();
      }
    });
  }
}
