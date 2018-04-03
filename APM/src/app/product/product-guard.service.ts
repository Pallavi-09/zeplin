import { Injectable } from '@angular/core';
import { CanActivate , ActivatedRouteSnapshot, Router} from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate{

  constructor(private router:Router) { }

  canActivate(route:ActivatedRouteSnapshot): boolean{
      let id = +route.url[1].path;
      console.log(id);
      if(isNaN(id) || id < 1){
        alert ('Invalid Id');
        this.router.navigate(['./product']);
        return false;
      }
      return true;
  }

}
