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

  getReturns1() {
    return this.http.get(`${this.apiUrl}returns1`);
  }

  getReturns2() {
    return this.http.get(`${this.apiUrl}returns2`);
  }

  getReturns3() {
    return this.http.get(`${this.apiUrl}returns3`);
  }

  getReturns4() {
    return this.http.get(`${this.apiUrl}returns4`);
  }

  getInception1() {
    return this.http.get(`${this.apiUrl}inception1`);
  }

  getInception2() {
    return this.http.get(`${this.apiUrl}inception2`);
  }

  getInception3() {
    return this.http.get(`${this.apiUrl}inception3`);
  }

  getInception4() {
    return this.http.get(`${this.apiUrl}inception4`);
  }
  
  getAllFunds(){
    return this.http.get(this.apiUrl + '/allFunds').pipe(map(data => {
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
