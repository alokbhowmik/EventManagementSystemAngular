import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';


@NgModule({
  declarations: [CreateEmployeeComponent],
  imports: [
    CommonModule,
    SidebarRoutingModule
  ]
})
export class SidebarModule { }
