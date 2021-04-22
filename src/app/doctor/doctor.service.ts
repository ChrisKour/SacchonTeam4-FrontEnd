
import { DoctorResponse } from './doctor-response';
import { AppResponse } from './../main/appResponse';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from './doctor';
import { Consultation } from './consultation';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private readonly baseUrl = 'http://localhost:9000/v1';

  constructor(private http: HttpClient) { }



  updateDoctorLastLogin(date: Object, id: string) {
    return this.http.patch<AppResponse>(
      `${this.baseUrl}/doctor/${id}`,
      date,
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) },
    );
  }

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
      `${this.baseUrl}/patients_with_no_consultation`,
      {
        headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) })
      },
    );
  }

  
  addConsultation(consultation: Consultation) {
    return this.http.post<AppResponse>(
      `${this.baseUrl}/doctor/${sessionStorage.getItem("id")}/consultation`,
      consultation,
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) },
    );
  }
}
