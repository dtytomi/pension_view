import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PensionService {

  private _jsonURL = './assets/premium_items.json';

  constructor(private http: HttpClient) { }

  getPremium(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

}
