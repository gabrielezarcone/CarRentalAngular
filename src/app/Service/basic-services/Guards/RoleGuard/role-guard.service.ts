import { Injectable } from '@angular/core';
import {AuthService} from '../../AuthService/auth.service';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class RoleGuardService implements CanActivate{

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const expectedRole = route.data.expectedRole;
    const tokenPayload = this.auth.decodeToken();
    if (tokenPayload){
      return this.auth.loggedUserRole().pipe(
        map(ruolo => {
          console.log(ruolo);
          if (this.auth.isTokenExpired() || ruolo.ruolo !== expectedRole){
            this.loginRedirect();
            return false;
          }
          else {
            return true;
          }
        })
      );
    }
    else {
      this.loginRedirect();
    }
  }

  private loginRedirect(): void{
    this.router.navigate(['/login'], {relativeTo: this.route});
  }
}
