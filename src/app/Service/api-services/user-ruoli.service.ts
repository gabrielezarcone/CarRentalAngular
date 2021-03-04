import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractApiService} from './abstractApiService';
import {UserRuoli} from '../../Model/UserRuoli';

@Injectable({
  providedIn: 'root'
})
export class UserRuoliService extends AbstractApiService<UserRuoli> {
  baseUrl = 'http://localhost:8000/user_ruoli/';
  constructor(protected http: HttpClient) {
    super(http);
  }
}
