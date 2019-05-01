import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PensionService {

  private premium_jsonURL = './assets/premium_items.json';
  private arm_jsonURL = './assets/arm_items.json';

  constructor(private http: HttpClient) { }

  getPremium(): Observable<any> {
    return this.http.get(this.premium_jsonURL);
  }

  getArm(): Observable<any> {
    return this.http.get(this.arm_jsonURL);
  }

}
