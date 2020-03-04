import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeemoduleRoutingModule } from './employeemodule-routing.module';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreateEmployeeComponent, LeftSideBarComponent],
  imports: [
    CommonModule,
    EmployeemoduleRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeemoduleModule { }
