import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators'
import { AppResponse } from '../main/appResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly baseUrl = 'http://localhost:9000/v1';
  responseOfAuth = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  authentication(username: string, password: string): Observable<AppResponse> {
    return this.http.get<AppResponse>(
      `${this.baseUrl}/validate/${username}`,
      {headers: new HttpHeaders({'Authorization':'Basic ' + btoa(username + ":" + password)})})
    .pipe(
      retry(3)
    );
  }
}
