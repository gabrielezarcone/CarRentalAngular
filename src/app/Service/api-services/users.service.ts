import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../Model/User';

@Injectable()
export class UsersService {
  private baseUrl = 'http://localhost:8000/users/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]>{
    return this.http.get<any>(this.baseUrl);
  }

  get(id: number): Observable<User>{
    return this.http.get<any>(this.baseUrl + '/' + id);
  }

  create(user: User): Observable<User>{
    return this.http.post<any>(this.baseUrl, user);
  }

  update(id: number, user: User): Observable<User>{
    return this.http.put<any>(this.baseUrl + '/' + id, user);
  }

  delete(id: number): Observable<User>{
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }
}
