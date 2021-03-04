import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export abstract class AbstractApiService<EntityClass>{
  abstract baseUrl: string;

  constructor(protected http: HttpClient) { }

  getAll(): Observable<EntityClass[]>{
    return this.http.get<any>(this.baseUrl);
  }

  get(id: number): Observable<EntityClass>{
    return this.http.get<any>(this.baseUrl + '/' + id);
  }

  create(entity: EntityClass): Observable<EntityClass>{
    return this.http.post<any>(this.baseUrl, entity);
  }

  update(id: number, entity: EntityClass): Observable<EntityClass>{
    return this.http.put<any>(this.baseUrl + '/' + id, entity);
  }

  delete(id: number): Observable<EntityClass>{
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }
}
