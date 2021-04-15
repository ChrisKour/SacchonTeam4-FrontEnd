import { PatientInsertComponent } from './patient/patient-insert/patient-insert.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'patient', component: PatientListComponent},
  {path: 'patient-insert', component: PatientInsertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
