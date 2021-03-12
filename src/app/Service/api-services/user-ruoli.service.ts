import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractApiService} from './abstractApiService';
import {UserRuoli} from '../../Model/UserRuoli';
import {Observable} from 'rxjs';
import {Ruolo} from '../../Model/Ruolo';
import {mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserRuoliService extends AbstractApiService<UserRuoli> {
  baseUrl = 'http://localhost:8000/user_ruoli/';
  constructor(protected http: HttpClient) {
    super(http);
  }

  userRoleByUser(userId: number): Observable<UserRuoli>{
    return this.http.get<any>(this.baseUrl + '/users/' + userId + '/user_ruoli/');
  }

  roleByUser(userId: number): Observable<Ruolo>{
    return this.userRoleByUser(userId).pipe(
      mergeMap(userRole => this.http.get<any>(this.baseUrl + '/ruolo/' + userRole.ruoloId))
    );
  }
}
