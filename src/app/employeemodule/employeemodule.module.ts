import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeemoduleRoutingModule } from './employeemodule-routing.module';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [CreateEmployeeComponent, LeftSideBarComponent, ViewEmployeeComponent, UserProfileComponent],
  imports: [
    CommonModule,
    EmployeemoduleRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeemoduleModule { }
