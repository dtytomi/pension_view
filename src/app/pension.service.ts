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

  getAllFunds() {
    return this.http.get(`${this.apiUrl}returns/allFunds`).pipe(map(data => {
      console.log(data)
      return {
        fund1: data[0].map(fund => {
          return {
            current_price: fund.fund1,
            opening_price: fund.fund1_price,
            returns: fund.returns_fund1,
            provider: fund.provider,
            date: fund.fund_date
          }
        }),
        fund2: data[0].map(fund => {
          return {
            current_price: fund.fund2,
            opening_price: fund.fund2_price,
            returns: fund.returns_fund2,
            provider: fund.provider,
            date: fund.fund_date
          }
        }),
        fund3: data[0].map(fund => {
          return {
            current_price: fund.fund3,
            opening_price: fund.fund3_price,
            returns: fund.returns_fund3,
            provider: fund.provider,
            date: fund.fund_date

          }
        }),
        fund4: data[0].map(fund => {
          return {
            current_price: fund.fund4,
            opening_price: fund.fund4_price,
            returns: fund.returns_fund4,
            provider: fund.provider,
            date: fund.fund_date

          }
        })
      }
    }))
  }

  getAllInceptions() {
    return this.http.get(`${this.apiUrl}inception/allInceptions`).pipe(map(data => {
      return {
        inception1: data[0].map(fund => {
          return {
            current_price: fund.fund1,
            opening_price: fund.fund1_price,
            returns: fund.inception_returns_fund1,
            provider: fund.provider,
            date: fund.fund_date
          }
        }),

        inception2: data[0].map(fund => {
          return {
            current_price: fund.fund2,
            opening_price: fund.fund2_price,
            returns: fund.inception_returns_fund2,
            provider: fund.provider,
            date: fund.fund_date
          }
        }),

        inception3: data[0].map(fund => {
          return {
            current_price: fund.fund3,
            opening_price: fund.fund3_price,
            returns: fund.inception_returns_fund3,
            provider: fund.provider,
            date: fund.fund_date

          }
        }),
        
        inception4: data[0].map(fund => {
          return {
            current_price: fund.fund4,
            opening_price: fund.fund4_price,
            returns: fund.inception_returns_fund4,
            provider: fund.provider,
            date: fund.fund_date

          }
        })
      }
    }))
  }

}
