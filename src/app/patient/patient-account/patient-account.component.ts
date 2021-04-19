import { LoginService } from './../../login/login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from './../patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';

@Component({
  selector: 'sacchon-patient-account',
  templateUrl: './patient-account.component.html',
  styleUrls: ['./patient-account.component.scss']
})
export class PatientAccountComponent implements OnInit {

  name: string;
  editForm: FormGroup;

  constructor(private service: PatientService, private fb: FormBuilder, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  editPatientAccount() {
    let patient: Patient;
    patient = this.editForm.value;
    patient.role = 'patient';

    this.service.editPatientAccount(this.editForm.value).subscribe(response => {
      alert(response.description + " Please login again for the changes to take effect.");
      if (response.code == 200) {
        sessionStorage.clear();
        this.loginService.responseOfAuth.next(false);
        this.router.navigate(['login']);
      }
    });
  }

  deletePatientAccount() {
    this.service.deletePatientAccount().subscribe(data => {
      alert(data.description);
      if (data.code == 200) {
        sessionStorage.clear();
        this.loginService.responseOfAuth.next(false);
        this.router.navigate(['register']);
      }
    })
  }

}
