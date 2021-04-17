import { HttpClient, HttpHeaders } from '@angular/common/http';
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
}
