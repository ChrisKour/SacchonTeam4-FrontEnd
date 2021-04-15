import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientInsertComponent } from './patient-insert/patient-insert.component';

@NgModule({
  declarations: [
    PatientListComponent,
    PatientInsertComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PatientModule { }
