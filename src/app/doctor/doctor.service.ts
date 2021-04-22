import { DoctorResponse } from './doctor-response';
import { AppResponse } from './../main/appResponse';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from './doctor';
import { Consultation } from '../chief-doctor/consultation';

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

  getAssignedAndUnassignedPatients() {
    return this.http.get<AppResponse>(
      `${this.baseUrl}/doctor/${sessionStorage.getItem("id")}/patient`,
      {
        headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) })
      },
    );
  }
 
  getPatientMeasurements(id: string) {
    return this.http.get<AppResponse>(
      `${this.baseUrl}/patient/${id}/measurement`,
      {
        headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) })
      },
    );
  }

  getPatientConsultations(id: string) {
    return this.http.get<AppResponse>(
      `${this.baseUrl}/patient/${id}/consultation`,
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