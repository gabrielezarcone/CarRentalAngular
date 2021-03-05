import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../Model/User';
import {AbstractApiService} from './abstractApiService';

@Injectable()
export class UsersService extends AbstractApiService<User>{
  baseUrl = 'http://localhost:8000/users/';
  constructor(protected http: HttpClient) {
    super(http);
  }
}
