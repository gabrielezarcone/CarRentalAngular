import { Injectable } from '@angular/core';
import {AbstractApiService} from './abstractApiService';
import {HttpClient} from '@angular/common/http';
import {Auto} from '../../Model/Auto';

@Injectable()
export class AutoService extends AbstractApiService<Auto> {
  baseUrl = 'http://localhost:8000/auto/';
  constructor(protected http: HttpClient) {
    super(http);
  }
}
