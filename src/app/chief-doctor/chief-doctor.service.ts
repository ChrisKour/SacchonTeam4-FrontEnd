import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppResponse } from '../main/appResponse';

@Injectable({
  providedIn: 'root'
})
export class ChiefDoctorService {

  private readonly baseUrl = 'http://localhost:9000/v1';

  constructor(private http: HttpClient) { }

  getAllPatients() {
    return this.http.get<AppResponse>(
      `${this.baseUrl}/patient`,
      {
        headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) })
      },
    );
  }

  getPatientPastData(id: string, fromDate: string, toDate: string) {
    return this.http.get<AppResponse>(
      `${this.baseUrl}/patient/${id}/measurement`,
      {
        headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) })
      },
    );
  }

  getInactivePatients(fromDate: string, toDate: string) {
    return this.http.get<AppResponse>(
      `${this.baseUrl}/patient`,
      {
        headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) })
      },
    );
  }

  getInactiveDoctors(fromDate: string, toDate: string) {
    return this.http.get<AppResponse>(
      `${this.baseUrl}/doctor`,
      {
        headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) })
      },
    );
  }

  getAllDoctors() {
    return this.http.get<AppResponse>(
      `${this.baseUrl}/doctor`,
      {
        headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) })
      },
    );
  }

  getDoctorConsultations(id: string, fromDate: string, toDate: string) {
    return this.http.get<AppResponse>(
      `${this.baseUrl}/doctor/${id}/measurement`,
      {
        headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) })
      },
    );
  }
}
