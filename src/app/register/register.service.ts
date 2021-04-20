import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { AppResponse } from '../main/appResponse';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly baseUrl = 'http://localhost:9000/v1';

  constructor(private http: HttpClient) { }

  registerPatient(patient: User): Observable<AppResponse> {
    return this.http.post<AppResponse>(
      `${this.baseUrl}/register_patient`,
      patient
      );
  }

  registerDoctor(doctor: User): Observable<AppResponse> {
    return this.http.post<AppResponse>(
      `${this.baseUrl}/register_doctor`,
      doctor
      );
  }

  registerChief(chief: User): Observable<AppResponse> {
    return this.http.post<AppResponse>(
      `${this.baseUrl}/register_chief`,
      chief
      );
  }
}
