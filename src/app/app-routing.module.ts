import { DoctorLandingPageComponent } from './doctor/doctor-landing-page/doctor-landing-page.component';
import { ChiefDoctorLandingPageComponent } from './chief-doctor/chief-doctor-landing-page/chief-doctor-landing-page.component';
import { PatientPageComponent } from './patient/patient-page/patient-page.component';
import { RegisterFormComponent } from './register/register-form/register-form.component';
import { LoginFormComponent } from './login/login-form/login-form.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: 'patient', component: PatientPageComponent},
  {path: 'register', component: RegisterFormComponent},
  {path: 'chief', component: ChiefDoctorLandingPageComponent},
  {path: 'doctor', component: DoctorLandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
