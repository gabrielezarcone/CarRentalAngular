import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractApiService} from './abstractApiService';
import {Prenotazione} from '../../Model/Prenotazione';

@Injectable()
export class PrenotazioneService extends AbstractApiService<Prenotazione>{
  baseUrl = 'http://localhost:8000/prenotazioni';
  constructor(protected http: HttpClient) {
    super(http);
  }
}
