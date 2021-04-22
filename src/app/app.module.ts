import { ChiefDoctorModule } from './chief-doctor/chief-doctor.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientModule } from './patient/patient.module';
import { MainComponent } from './main/main.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorAccountComponent } from './doctor/doctor-account/doctor-account.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DoctorComponent,
    DoctorAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PatientModule,
    HttpClientModule,
    LoginModule,
    RegisterModule,
    ChiefDoctorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
