import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', loadChildren: ()=>import('./authmodule/authmodule.module').then(
    m => m.AuthmoduleModule
  )},
  {path:"createEmployeeComponent",loadChildren:()=>import('./employeemodule/employeemodule.module').then(
    m => m.EmployeemoduleModule
  )},
  {path:"userProfile",loadChildren:()=>import('./user-module/user-module.module').then(
    m => m.UserModuleModule
  )}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
