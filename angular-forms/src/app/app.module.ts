import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { FormsDataComponent } from './forms-data/forms-data.component';
import { RouterModule,Routes } from "@angular/router";
import { CommonserviceService } from './commonservice.service';
import { HttpClientModule} from '@angular/common/http';

const routes:Routes = [
  {path:'forms', component:FormsDataComponent},
  {path:'http', component:EmployeeDetailComponent}
]
  
@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailComponent,
    FormsDataComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CommonserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
