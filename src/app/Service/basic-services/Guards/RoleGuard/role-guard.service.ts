import { Injectable } from '@angular/core';
import {AuthService} from '../../AuthService/auth.service';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {UserRuoliService} from '../../../api-services/user-ruoli.service';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class RoleGuardService implements CanActivate{

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private usersRolesService: UserRuoliService
  ) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const expectedRole = route.data.expectedRole;
    const tokenPayload = this.auth.decodeToken();
    return this.usersRolesService.roleByUser(tokenPayload.sub).pipe( // sub = userId nel token
      map((ruolo) => {
        console.log(ruolo);
        if (this.auth.isTokenExpired() || ruolo.ruolo !== expectedRole){
          this.router.navigate(['/login'], {relativeTo: this.route});
          return false;
        }
        return true;
      })
    );

  }
}
