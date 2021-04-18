import { LoginService } from './../login/login.service';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sacchon-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  isLogged: boolean;
  subscription: Subscription;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("credentials") == null){
      this.isLogged = false;
      this.router.navigate(['register']);
    } else {
      this.isLogged = true;
      this.router.navigate(['patient']);
    }
    
    this.subscription = this.loginService.responseOfAuth.subscribe(data => this.isLogged = data);
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }

  logout() {
    sessionStorage.removeItem('credentials');
    this.isLogged = false;
    this.router.navigate(['login']);
  }
}
