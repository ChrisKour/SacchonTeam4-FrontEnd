import { PatientService } from './../patient.service';
import { Consultation } from './../../chief-doctor/consultation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sacchon-patient-view-consultations',
  templateUrl: './patient-view-consultations.component.html',
  styleUrls: ['./patient-view-consultations.component.scss']
})
export class PatientViewConsultationsComponent implements OnInit {

  consultations: Consultation[];

  constructor(private service: PatientService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.getAllPatientConsultations().subscribe(data => {
      if(data.code == 400) {
        alert(data.description);
      } else {
        this.consultations = <Consultation[]>data.data;
        console.log(this.consultations);
      }
    }
    );
  }

}
