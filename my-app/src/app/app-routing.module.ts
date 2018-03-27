import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeroDetailsComponentComponent } from './hero-details-component/hero-details-component.component';
import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
class AlwaysAuthGuard implements CanActivate {
  canActivate() {
      console.log("AlwaysAuthGuard Running");
      return true;
    }
}

class UserService {
  isLoggedIn() : boolean {
    return false;
  }
}

@Injectable()
class OnlyLoggedInGuard implements CanActivate {
  
  constructor(private userservice : UserService){}

  canActivate(){
      if(this.userservice.isLoggedIn()){
        return true;
      }
      else{
        alert("Sorry ! You don't have permission");
        return false;
      }
  }
}
const routes: Routes = [
  { path:'', component: WelcomeComponent },  
  { path:'heroes',canActivate:[OnlyLoggedInGuard,AlwaysAuthGuard], component: HeroesComponent },
  { path:'dashboard', component: DashboardComponent },
  { path:'detail/:id', component: HeroDetailsComponentComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[OnlyLoggedInGuard,UserService,AlwaysAuthGuard]
})


export class AppRoutingModule { 

}
