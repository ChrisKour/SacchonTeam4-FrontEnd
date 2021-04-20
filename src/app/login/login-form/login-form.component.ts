import { LoginService } from './../login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRepresantation } from '../user-represantation';

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

    this.service.authentication(username, password).subscribe(data => {
      if (data.code == 200) {
        let user = <UserRepresantation>data.data;
        this.updateSessionStorageInformation(user);
        this.service.responseOfAuth.next(true);
        this.router.navigate([user.role]);
      }
      else {
        this.service.responseOfAuth.next(false);
        alert("Wrong username or password");
        this.loginForm.reset();
      }
    });
  }

  updateSessionStorageInformation(user: UserRepresantation) {
    sessionStorage.setItem("credentials", user.username + ":" + user.password);
    sessionStorage.setItem("username", user.username);
    sessionStorage.setItem("id", user.id + '');
    sessionStorage.setItem("role", user.role);
  }

  redirectToRegister() {
    this.router.navigate(['register']);
  }
}
