import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class UsersService {
  private baseUrl = 'http://localhost:8000/users/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }
}
