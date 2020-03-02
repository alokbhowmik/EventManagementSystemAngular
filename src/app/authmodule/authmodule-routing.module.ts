import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';




const routes: Routes = [
  {path:"", component:WelcomeComponent},
  {path:"user/login",pathMatch:'full', component:LoginComponent},
  {path:"user/login/signup",pathMatch:'full', component:SignupComponent},
  {path:"user/login/signup/compleate",pathMatch:'full', redirectTo:'user/login'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthmoduleRoutingModule { }
