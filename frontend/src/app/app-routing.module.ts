import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
    { path : '', component : LoginComponent}, // default path
    {path : 'login', component : LoginComponent},
    {path : 'registration', component : RegistrationComponent},
    {path : 'dashboard', component : DashboardComponent}
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
