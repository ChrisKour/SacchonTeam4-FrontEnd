import { LoginService } from './../login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'sacchon-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private service: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    let username = this.loginForm.get('username').value;
    let password = this.loginForm.get('password').value;
    sessionStorage.setItem("credentials", username + ":" + password);

    this.service.authentication(this.loginForm.value).subscribe(data => {
      if (data.code == 200) {
        this.router.navigate([`${data.description}`]);
      }
      else {
        alert("Wrong username or password");
        // this.service.responseOfAuth.next(false);
        this.loginForm.reset();
      }
    });
  }
}
