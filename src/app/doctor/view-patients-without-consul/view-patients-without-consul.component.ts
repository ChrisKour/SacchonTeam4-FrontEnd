import { FormBuilder } from '@angular/forms';
import { Patient } from 'src/app/patient/patient';
import { DoctorService } from '../doctor.service';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sacchon-view-patients-without-consul',
  templateUrl: './view-patients-without-consul.component.html',
  styleUrls: ['./view-patients-without-consul.component.scss']
})

export class ViewPatientsWithoutConsulComponent implements OnInit {
  
  patients: Patient[];
  idOfSelectedPatient = -1;
  isPatientClicked = false;
  
  constructor(private fb: FormBuilder, private service: DoctorService) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    this.service.getPatientsWithNoConsul().subscribe(data => {
      if (data.code == 400) {
        alert(data.description);
      }
      this.patients = <Patient[]>data.data;
    });
  }

 

}
