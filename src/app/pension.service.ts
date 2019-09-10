import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PensionService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://sound-fastness-246414.appspot.com/api/pensions';

  getPensions() {
    return this.http.get(this.configUrl);
  }

}
