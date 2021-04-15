import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientInsertComponent } from './patient-insert/patient-insert.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PatientListComponent,
    PatientInsertComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PatientModule { }
