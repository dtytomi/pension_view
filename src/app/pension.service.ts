import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PensionService {

  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:4000/api/pensions';

  getPensions(): Observable<any> {
    return this.http.get(this.configUrl);
  }

}
