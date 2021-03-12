import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../Model/User';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl  = 'http://localhost:8000/';

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) { }

  private static setSession(authRes): void{
    localStorage.setItem('jwtToken', authRes.accessToken);
  }

  register(email: string, password: string): void{
    this.http.post<User>(this.baseUrl + 'register', {email, password}).subscribe(
      res => AuthService.setSession(res)
    );
  }

  login(email: string, password: string): void{
    this.http.post<User>(this.baseUrl + 'login', {email, password}).subscribe(
      res => AuthService.setSession(res)
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
}
