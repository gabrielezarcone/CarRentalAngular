import { Injectable } from '@angular/core';
import {ActivatedRoute, CanActivate, Router} from '@angular/router';
import {AuthService} from '../AuthService/auth.service';

@Injectable()
export class AuthGuardsService implements CanActivate{

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  canActivate(): boolean {
    // se il token è scaduto la guard ritorna sempre false e reindirizza verso pagina di login
    if (this.auth.isTokenExpired()){
      this.router.navigate(['/login'], {relativeTo: this.route});
      return false;
    }
    return true;
  }
}
