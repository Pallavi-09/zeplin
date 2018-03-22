import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeroDetailsComponentComponent } from './hero-details-component/hero-details-component.component';


const routes: Routes = [
  { path:'', component: WelcomeComponent },  
  { path:'heroes', component: HeroesComponent },
  { path:'dashboard', component: DashboardComponent },
  { path:'detail/:id', component: HeroDetailsComponentComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
