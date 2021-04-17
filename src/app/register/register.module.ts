import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form/register-form.component';



@NgModule({
  declarations: [
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
