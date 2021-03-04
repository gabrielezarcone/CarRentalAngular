import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractApiService} from './abstractApiService';
import {Ruolo} from '../../Model/Ruolo';

@Injectable({
  providedIn: 'root'
})
export class RuoloService extends AbstractApiService<Ruolo>{
  baseUrl = 'http://localhost:8000/ruolo/';
  constructor(protected http: HttpClient) {
    super(http);
  }
}
