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
    ) {  }

  getPensions() {
    return this.http.get(`${this.apiUrl}pensions`);
  }

  getFund1() {
    return this.http.get(`${this.apiUrl}fund1`);
  }

  getFund2() {
    return this.http.get(`${this.apiUrl}fund2`);
  }

  getFund3() {
    return this.http.get(`${this.apiUrl}fund3`);
  }

  getFund4() {
    return this.http.get(`${this.apiUrl}fund4`);
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
