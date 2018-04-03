import { NgModule,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { ProductDetailComponent } from '../product/product-detail/product-detail.component';
import { RouterModule,Routes} from '@angular/router';
import { ProductGuardService } from '../product/product-guard.service'
import { WelcomeComponent } from '../home/welcome/welcome.component';

const routes: Routes = [
  {path:'product', component: ProductComponent},
  {path:'product/:id',canActivate:[ProductGuardService], component: ProductDetailComponent},
  {path:'welcome', component:WelcomeComponent },
  {path:'', redirectTo: 'welcome', pathMatch:'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  declarations: []
})

export class RoutingModule { 
  ngOnInit(){
      
    }

}
