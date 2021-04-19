import { Measurement } from './measurement';
import { PatientResponse } from './patient-response';
import { AppResponse } from './../main/appResponse';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private readonly baseUrl = 'http://localhost:9000/v1';

  constructor(private http: HttpClient) { }

  getPatients() : Observable<Patient[]> {
    return this.http.get<Patient[]>(
      `${this.baseUrl}/patient`,
      {headers: new HttpHeaders({'Authorization':'Basic ' + btoa(sessionStorage.getItem("credentials"))})}
      );
  }

  addPatient(patient: Patient) {
    return this.http.post<Patient>(`${this.baseUrl}/patient`, patient);
  }

  getPatientInfo() : Observable<PatientResponse> {
    return this.http.get<PatientResponse>(
      `${this.baseUrl}/patient/${sessionStorage.getItem("username")}`,
      {headers: new HttpHeaders({'Authorization':'Basic ' + btoa(sessionStorage.getItem("credentials"))})}
      );
  }

  deletePatientAccount() {
    return this.http.delete<AppResponse>(
      `${this.baseUrl}/patient/${sessionStorage.getItem("username")}`,
      {headers: new HttpHeaders({'Authorization':'Basic ' + btoa(sessionStorage.getItem("credentials"))})}
      );
  }

  editPatientAccount(patient: Patient) {
    return this.http.put<PatientResponse>(
      `${this.baseUrl}/patient/${sessionStorage.getItem("username")}`,
      patient,
      {headers: new HttpHeaders({'Authorization':'Basic ' + btoa(sessionStorage.getItem("credentials"))})},
      );
  }

  addPatientMeasurement(measurement: Measurement) {
    return this.http.post<AppResponse>(
      `${this.baseUrl}/patient/${sessionStorage.getItem("username")}/measurement`,
      measurement,
      {headers: new HttpHeaders({'Authorization':'Basic ' + btoa(sessionStorage.getItem("credentials"))})},
      );
  }

  getAverageMeasurement(fromDate: string, toDate: string, type: string) {
    return this.http.get<AppResponse>(
      `${this.baseUrl}/patient/${sessionStorage.getItem("username")}/measurement`,
      {headers: new HttpHeaders({'Authorization':'Basic ' + btoa(sessionStorage.getItem("credentials"))}),
      params : new HttpParams().set('fromDate', fromDate).set("toDate", toDate).set("type", type)
      },
      );
  }
}
