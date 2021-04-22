import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorAccountComponent } from './doctor-account/doctor-account.component';
import { ViewPatientsWithoutConsulComponent } from './view-patients-without-consul/view-patients-without-consul.component';
import { DoctorLandingPageComponent } from './doctor-landing-page/doctor-landing-page.component';
import { ViewPatientRecordsComponent } from './view-patient-records/view-patient-records.component';

@NgModule({
  declarations: [
    DoctorAccountComponent,
    ViewPatientsWithoutConsulComponent,
    DoctorLandingPageComponent,
    ViewPatientRecordsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DoctorModule { }

