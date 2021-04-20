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
}
