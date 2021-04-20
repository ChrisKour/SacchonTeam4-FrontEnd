import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiefDoctorLandingPageComponent } from './chief-doctor-landing-page/chief-doctor-landing-page.component';
import { ViewPatientDataComponent } from './view-patient-data/view-patient-data.component';
import { ViewDoctorConsultationComponent } from './view-doctor-consultation/view-doctor-consultation.component';
import { ViewPatientsWaitingComponent } from './view-patients-waiting/view-patients-waiting.component';
import { InactivePatientsComponent } from './inactive-patients/inactive-patients.component';
import { InactiveDoctorsComponent } from './inactive-doctors/inactive-doctors.component';



@NgModule({
  declarations: [
    ChiefDoctorLandingPageComponent,
    ViewPatientDataComponent,
    ViewDoctorConsultationComponent,
    ViewPatientsWaitingComponent,
    InactivePatientsComponent,
    InactiveDoctorsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ChiefDoctorModule { }
