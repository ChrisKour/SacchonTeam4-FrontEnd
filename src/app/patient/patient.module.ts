import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list/patient-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PatientListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PatientModule { }
