import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class PensionService {

  constructor(private http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) { }
  
  getPensions() {
    return this.http.get(`${this.apiUrl}pensions`);
  }

    getReturns1() {
    return this.http.get(`${this.apiUrl}returns/1`);
  }

  getReturns2() {
    return this.http.get(`${this.apiUrl}returns/2`);
  }

  getReturns3() {
    return this.http.get(`${this.apiUrl}returns/3`);
  }

  getReturns4() {
    return this.http.get(`${this.apiUrl}returns/4`);
  }

  getInception1() {
    return this.http.get(`${this.apiUrl}inception/1`);
  }

  getInception2() {
    return this.http.get(`${this.apiUrl}inception/2`);
  }

  getInception3() {
    return this.http.get(`${this.apiUrl}inception/3`);
  }

  getInception4() {
    return this.http.get(`${this.apiUrl}inception/4`);
  }

}