import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';


const routes: Routes = [
  {path:"", component:LeftSideBarComponent},
  {path:"addEmployee", component:CreateEmployeeComponent},
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
