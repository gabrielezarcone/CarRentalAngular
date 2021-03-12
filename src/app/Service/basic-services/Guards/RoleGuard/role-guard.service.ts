import { Injectable } from '@angular/core';
import {AuthService} from '../../AuthService/auth.service';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {UserRuoliService} from '../../../api-services/user-ruoli.service';

@Injectable()
export class RoleGuardService implements CanActivate{

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private usersRolesService: UserRuoliService
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const tokenPayload = this.auth.decodeToken();
    const userRole = this.usersRolesService.roleByUser(tokenPayload.id);

    if (this.auth.isTokenExpired() || userRole !== expectedRole){
      this.router.navigate(['/login'], {relativeTo: this.route});
      return false;
    }
    return true;
  }
}
