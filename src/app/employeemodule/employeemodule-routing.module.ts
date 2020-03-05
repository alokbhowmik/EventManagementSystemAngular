import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  {path:"", component:LeftSideBarComponent},
  {path:"Profile", component:UserProfileComponent},
  {path:"addEmployee", component:CreateEmployeeComponent},
  {path:"viewEmployee", component:ViewEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeemoduleRoutingModule { 
  constructor(){
    console.log(localStorage)
  }
}
