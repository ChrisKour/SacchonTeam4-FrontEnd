import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientPageComponent } from './patient-page/patient-page.component';
import { PatientAccountComponent } from './patient-account/patient-account.component';
import { PatientPastMeasurementsComponent } from './patient-past-measurements/patient-past-measurements.component';
import { PatientAddMeasurementComponent } from './patient-add-measurement/patient-add-measurement.component';
import { EditPastMeasurementsComponent } from './edit-past-measurements/edit-past-measurements.component';
import { PatientViewConsultationsComponent } from './patient-view-consultations/patient-view-consultations.component';

@NgModule({
  declarations: [
    PatientPageComponent,
    PatientAccountComponent,
    PatientPastMeasurementsComponent,
    PatientAddMeasurementComponent,
    EditPastMeasurementsComponent,
    PatientViewConsultationsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PatientModule { }
