import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../Model/User';
import {JwtHelperService} from '@auth0/angular-jwt';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Ruolo} from '../../../Model/Ruolo';
import {UserRuoliService} from '../../api-services/user-ruoli.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl  = 'http://localhost:8000/';

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router,
    private route: ActivatedRoute,
    private usersRolesService: UserRuoliService
  ) { }

  private setSession(authRes): void{
    localStorage.setItem('jwtToken', authRes.accessToken);
    this.router.navigate(['/homeAdmin'], {relativeTo: this.route});
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
    localStorage.removeItem('jwtToken');
  }

  getToken(): string{
    return localStorage.getItem('jwtToken');
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
}
