import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../Model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl  = 'http://localhost:8000/register';

  constructor(private http: HttpClient) { }

  private static setSession(authRes): void{
    localStorage.setItem('jwtToken', authRes);
  }

  login(email: string, password: string): void{
    this.http.post<User>(this.baseUrl, {email, password}).subscribe(
      res => AuthService.setSession(res)
    );
  }

  logout(): void{
    localStorage.removeItem('jwtToken');
  }

  getToken(): string{
    return localStorage.getItem('jwtToken');
  }
}
