import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../Model/User';
import {JwtHelperService} from '@auth0/angular-jwt';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Ruolo} from '../../../Model/Ruolo';
import {UserRuoliService} from '../../api-services/user-ruoli.service';
import {Observable} from 'rxjs';
import {UsersService} from '../../api-services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl  = 'http://localhost:8000/';
  tokenName = 'jwtToken';

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router,
    private route: ActivatedRoute,
    private usersRolesService: UserRuoliService,
    private userService: UsersService
  ) { }

  private setSession(authRes): void{
    localStorage.setItem(this.tokenName, authRes.accessToken);
    this.router.navigate(['/home'], {relativeTo: this.route});
  }

  register(email: string, password: string): void{
    this.http.post<User>(this.baseUrl + 'register', {email, password}).subscribe(
      res => this.setSession(res)
    );
  }

  login(email: string, password: string): void{
    this.http.post<User>(this.baseUrl + 'login', {email, password}).subscribe(
      res => this.setSession(res)
    );
  }

  logout(): void{
    localStorage.removeItem(this.tokenName);
    location.reload();
  }

  getToken(): string{
    return localStorage.getItem(this.tokenName);
  }

  decodeToken(): any{
    const token = this.getToken();
    return this.jwtHelper.decodeToken(token);
  }

  isTokenExpired(): boolean{
    const token = this.getToken();
    return this.jwtHelper.isTokenExpired(token);
  }

  loggedUserRole(): Observable<Ruolo>{
    const tokenPayload = this.decodeToken();
    if (tokenPayload){
      return this.usersRolesService.roleByUser(tokenPayload.sub).pipe( // sub = userId nel token
        map((ruolo) => {
          return ruolo;
        })
      );
    }
  }

  loggedUser(): Observable<User>{
    const tokenPayload = this.decodeToken();
    return this.userService.get(tokenPayload.sub);
  }

  // True se l'utente loggato è un admin
  isAdmin(): Observable<boolean> {
    return this.loggedUserRole().pipe(
      map((ruolo) => {
          return ruolo.ruolo === 'ROLE_ADMIN';
        })
    );
  }

  // True se l'utente è loggato
  isLogged(): boolean{
    return localStorage.getItem(this.tokenName) !== null;
  }
}
