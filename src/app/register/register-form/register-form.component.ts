import { RegisterService } from './../register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppResponse } from 'src/app/main/appResponse';

@Component({
  selector: 'sacchon-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;


  constructor(private fb: FormBuilder, private service: RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]],
      role: ['', Validators.required]
    });
  }

  addUser() {
    let userRole = this.registerForm.get('role').value;

    if (userRole == 'patient') {
      this.service.registerPatient(this.registerForm.value).subscribe(response => {
        this.checkResponse(response);
      });
    } else if (userRole == 'doctor') {
      this.service.registerDoctor(this.registerForm.value).subscribe(response => {
        this.checkResponse(response);
      });
    } else if (userRole == 'chief') {
      this.service.registerChief(this.registerForm.value).subscribe(response => {
        this.checkResponse(response);
      });
    } else {
      alert("Invalid user type selection!!!");
      this.registerForm.reset();
    }
  }

  private checkResponse(response: AppResponse) {
    if (response.code == 200) {
      this.router.navigate(['login']);
    } else {
      alert(response.description);
      this.registerForm.reset();
    }
  }
}
