import { LoginService } from './../../login/login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from './../doctor.service';
import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';

@Component({
  selector: 'sacchon-doctor-account',
  templateUrl: './doctor-account.component.html',
  styleUrls: ['./doctor-account.component.scss']
})
export class DoctorAccountComponent implements OnInit {

  name: string;
  editForm: FormGroup; 

  constructor(private service: DoctorService, private fb: FormBuilder, private router: Router, private loginService: LoginService) { }
    
  ngOnInit(): void {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
  
  editDoctorAccount() {
    let doctor: Doctor;
    doctor = this.editForm.value;
    doctor.role = 'doctor';

    this.service.editDoctorAccount(this.editForm.value).subscribe(response => {
      if (response.code == 200) {
        alert(response.description + " Please login again for the changes to take effect.");
        sessionStorage.clear();
        this.loginService.responseOfAuth.next(false);
        this.router.navigate(['login']);
      } else {
        alert(response.description);
      }
    });
  }

  deleteDoctorAccount() {
    this.service.deleteDoctorAccount().subscribe(data => {
      alert(data.description);
      if (data.code == 200) {
        sessionStorage.clear();
        this.loginService.responseOfAuth.next(false);
        this.router.navigate(['register']);
      }
    })
  }

}