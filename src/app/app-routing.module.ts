import { EditPastMeasurementsComponent } from './patient/edit-past-measurements/edit-past-measurements.component';
import { PatientAddMeasurementComponent } from './patient/patient-add-measurement/patient-add-measurement.component';
import { PatientPastMeasurementsComponent } from './patient/patient-past-measurements/patient-past-measurements.component';
import { PatientAccountComponent } from './patient/patient-account/patient-account.component';
import { PatientPageComponent } from './patient/patient-page/patient-page.component';
import { RegisterFormComponent } from './register/register-form/register-form.component';
import { LoginFormComponent } from './login/login-form/login-form.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'register', pathMatch: 'full'},
  {path: 'login', component: LoginFormComponent},
  {path: 'patient', component: PatientPageComponent},
  {path: 'register', component: RegisterFormComponent},
  {path: 'doctor', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
