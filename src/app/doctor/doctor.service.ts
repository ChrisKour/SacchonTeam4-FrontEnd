import { DoctorResponse } from './doctor-response';
import { AppResponse } from './../main/appResponse';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private readonly baseUrl = 'http://localhost:9000/v1';

  constructor(private http: HttpClient) { }

  editDoctorAccount(doctor: Doctor) {
    return this.http.put<DoctorResponse>(
      `${this.baseUrl}/doctor/${sessionStorage.getItem("id")}`,
      doctor,
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) },
    );
  }

  deleteDoctorAccount() {
    return this.http.delete<AppResponse>(
      `${this.baseUrl}/doctor/${sessionStorage.getItem("id")}`,
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) }
    );
  }
  
  getPatientsWithNoConsul() {
    return this.http.get<AppResponse>(
      `${this.baseUrl}/patients_with_no_consultation/${sessionStorage.getItem("id")}`,
      {
        headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) })
      },
    );
  }
 
}
