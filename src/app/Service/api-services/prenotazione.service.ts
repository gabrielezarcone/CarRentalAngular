import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractApiService} from './abstractApiService';
import {Prenotazione} from '../../Model/Prenotazione';
import {Observable} from 'rxjs';

@Injectable()
export class PrenotazioneService extends AbstractApiService<Prenotazione>{
  baseUrl = 'http://localhost:8000/prenotazioni';
  constructor(protected http: HttpClient) {
    super(http);
  }

  getByUser(id: number): Observable<Prenotazione[]> {
    return this.http.get<any>(this.baseUrl + '?user=' + id);
  }
}
