import { Observable, Subject } from 'rxjs';
import { LoginInformation } from './login-information';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators'
import { AppResponse } from '../main/appResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly baseUrl = 'http://localhost:9000/v1';
  params = new HttpParams();
  responseOfAuth = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  authentication(loginInformation: LoginInformation): Observable<AppResponse> {
    console.log(loginInformation);
    this.params.append('username', loginInformation.username);
    this.params.append('password', loginInformation.password);
    this.responseOfAuth.next(true);

    return this.http.get<AppResponse>(
      `${this.baseUrl}/validate`,
      {headers: new HttpHeaders({'Authorization':'Basic ' + btoa(sessionStorage.getItem("credentials"))})})
    .pipe(
      // retry(3)
    );
  }
}
