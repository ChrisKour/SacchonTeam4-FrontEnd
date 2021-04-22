import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorAccountComponent } from './doctor-account/doctor-account.component';
import { ViewPatientsWithoutConsulComponent } from './view-patients-without-consul/view-patients-without-consul.component';
<<<<<<< HEAD
import { DoctorAddConsultationComponent } from './doctor-add-consultation/doctor-add-consultation.component';


=======
import { DoctorLandingPageComponent } from './doctor-landing-page/doctor-landing-page.component';
>>>>>>> 69fc5da3a21174ccccbb1b5bd21a4dffb6e3255c

@NgModule({
  declarations: [
    DoctorAccountComponent,
<<<<<<< HEAD
    //DoctorPageComponent,
    ViewPatientsWithoutConsulComponent,
    DoctorAddConsultationComponent
=======
    ViewPatientsWithoutConsulComponent,
    DoctorLandingPageComponent
>>>>>>> 69fc5da3a21174ccccbb1b5bd21a4dffb6e3255c
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DoctorModule { }

