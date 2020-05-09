import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router} from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{
  
  constructor(private hardcodedAuthenticationService:HardcodedAuthenticationService,public router:Router) {

  }
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
     console.log('RouteGuard is called');
    if(this.hardcodedAuthenticationService.isUserLoggedIn())
  
    return true;
   //if some other url then it will take me login
        this.router.navigate(['login'])

  return false;
   }
}
