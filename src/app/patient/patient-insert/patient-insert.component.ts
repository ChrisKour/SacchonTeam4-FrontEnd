import { PatientService } from './../patient.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Patient } from '../patient';

@Component({
  selector: 'sacchon-patient-insert',
  templateUrl: './patient-insert.component.html',
  styleUrls: ['./patient-insert.component.scss']
})
export class PatientInsertComponent implements OnInit {

  patientForm!: FormGroup;

  constructor(private patientService: PatientService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.patientForm = this.fb.group({
      name: ['', ],
      username: ['', ],
      password: ['', ]
    });
  }

  addPatient() {
    let patient : Patient = this.patientForm.value;
    this.patientService.addPatient(patient).subscribe(response => {
      console.log(response);
    });
    this.patientForm.reset();
  }

}
