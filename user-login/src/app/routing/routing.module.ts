import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
  { path: '', component : LoginComponent, outlet:'blank'},
  { path: 'login', component : LoginComponent },
  { path: 'register', component : RegistrationComponent, outlet:'dashboard'},
  { path: 'home', component : HomeComponent, outlet:'login'},  
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class RoutingModule { }
