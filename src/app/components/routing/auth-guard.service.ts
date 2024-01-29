import { 
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router, 
  CanActivateFn,
  CanActivateChildFn
} from '@angular/router'; 
import { Injectable, inject } from '@angular/core';

import { AuthService } from './auth.service'; 


export const canActivate: CanActivateFn = (route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {
  const router: Router = inject(Router);
  const authService: AuthService = inject(AuthService);
  let authenticated:any=false;
  authService.isAuthenticated().subscribe(value=>{
  authenticated=value;
  });
     
        if (authenticated) {
          return true;
        } else {
        router.navigate(['/login']);
        }
      console.log('is logged in : '+authenticated)
        return inject(Router).createUrlTree(['/']);
};
 
export const canActivateChild:CanActivateChildFn =  (route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {
    const router: Router = inject(Router);
    const authService: AuthService = inject(AuthService);
    let role:any='user';
    authService.subjectRole.subscribe(value=>{
    role=value;
    });
       
          if (role==='admin') {
            return true;
          } else {
          router.navigate(['/routing']);
          }
        console.log('is logged in : '+role)
          return inject(Router).createUrlTree(['/routing']);
}

/*
@Injectable()
export class AuthGuard implements CanActivateFn, CanActivateChildFn {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
      .then(
        (authenticated: boolean) => {
          if (authenticated) {
            return true;
          } else {
            this.router.navigate(['/']);
          }
        }
      );
  }

  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
*/
