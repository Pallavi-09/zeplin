import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RoutingModule } from './routing/routing.module';
import { UserserviceService } from './service/userservice.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { JsonserviceService } from './jsonservice.service';
import { ChildComponentComponent } from './child-component/child-component.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ChildComponentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [UserserviceService,JsonserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
