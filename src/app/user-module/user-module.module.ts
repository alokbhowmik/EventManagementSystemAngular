import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { UserprofileComponent } from './userprofile/userprofile.component';


@NgModule({
  declarations: [UserprofileComponent],
  imports: [
    CommonModule,
    UserModuleRoutingModule
  ]
})
export class UserModuleModule { }
