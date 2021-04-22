import { Measurement } from './measurement';
import { PatientResponse } from './patient-response';
import { AppResponse } from './../main/appResponse';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private readonly baseUrl = 'http://localhost:9000/v1';

  constructor(private http: HttpClient) { }

  updatePatientLastLogin(date: Object, id: string) {
    return this.http.patch<AppResponse>(
      `${this.baseUrl}/patient/${id}`,
      date,
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) },
    );
  }

  editPatientAccount(patient: Patient) {
    return this.http.put<PatientResponse>(
      `${this.baseUrl}/patient/${sessionStorage.getItem("id")}`,
      patient,
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) },
    );
  }

  deletePatientAccount() {
    return this.http.delete<AppResponse>(
      `${this.baseUrl}/patient/${sessionStorage.getItem("id")}`,
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) }
    );
  }

  addPatientMeasurement(measurement: Measurement) {
    return this.http.post<AppResponse>(
      `${this.baseUrl}/patient/${sessionStorage.getItem("id")}/measurement`,
      measurement,
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) },
    );
  }

  getAverageMeasurement(fromDate: string, toDate: string, type: string) {
    return this.http.get<AppResponse>(
      `${this.baseUrl}/patient/${sessionStorage.getItem("id")}/measurement_type`,
      {
        headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }),
        params: new HttpParams().set('fromDate', fromDate).set("toDate", toDate).set("type", type)
      },
    );
  }

  getAllPastMeasurements() {
    return this.http.get<AppResponse>(
      `${this.baseUrl}/patient/${sessionStorage.getItem("id")}/measurement`,
      {
        headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) })
      },
    );
  }

  deleteMeasurement(id: string) {
    return this.http.delete<AppResponse>(
      `${this.baseUrl}/patient/${sessionStorage.getItem("id")}/measurement/${id}`,
      {
        headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) })
      },
    );
  }

  editPatientMeasurement(id: string, measurement: Measurement) {
    return this.http.put<AppResponse>(
      `${this.baseUrl}/patient/${sessionStorage.getItem("id")}/measurement/${id}`,
      measurement,
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) },
    );
  }

  getAllPatientConsultations() {
    return this.http.get<AppResponse>(
      `${this.baseUrl}/patient/${sessionStorage.getItem("id")}/consultation`,
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) },
    );
  }

  checkForUpdatedConsultations() {
    return this.http.get<AppResponse>(
      `${this.baseUrl}/patient/${sessionStorage.getItem("id")}/consultation_updates`,
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) })},
    );
  }
}
