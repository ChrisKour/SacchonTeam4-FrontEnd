import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorAccountComponent } from './doctor-account/doctor-account.component';
//import { DoctorPageComponent } from './doctor-page/doctor-page.component';
import { ViewPatientsWithoutConsulComponent } from './view-patients-without-consul/view-patients-without-consul.component';
import { DoctorAddConsultationComponent } from './doctor-add-consultation/doctor-add-consultation.component';



@NgModule({
  declarations: [
    
  
    DoctorAccountComponent,
    //DoctorPageComponent,
    ViewPatientsWithoutConsulComponent,
    DoctorAddConsultationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DoctorModule { }

