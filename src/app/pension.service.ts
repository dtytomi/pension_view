import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PensionService {

  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:5000/api/pensions';

  getPensions(): Observable<any> {
    return this.http.get(this.configUrl);
  }
  getAllFunds(){
    return this.http.get(this.configUrl+ '/allFunds').pipe(map(data => {
    return {fund1: data[0].map(fund=> {
      return {
          current_price: fund.fund1,
          opening_price: fund.fund1_price,
          returns: fund.returns_fund1,
          provider: fund.provider
        }
    }),
    fund2: data[0].map(fund=>{
      return {
        current_price: fund.fund2,
          opening_price: fund.fund2_price,
          returns: fund.returns_fund2,
          provider: fund.provider
      }
    }),
    fund3: data[0].map(fund=>{
      return {
        current_price: fund.fund3,
          opening_price: fund.fund3_price,
          returns: fund.returns_fund3,
          provider: fund.provider
      }
    }),
    fund4: data[0].map(fund=>{
      return {
        current_price: fund.fund4,
          opening_price: fund.fund4_price,
          returns: fund.returns_fund4,
          provider: fund.provider
      }
    })
    }  
    }))
  }

}
