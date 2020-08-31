import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { MessageService } from "./message.service";
import { Pension } from "../_models";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json; charset=utf-8',
    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('currentUser'))}`
  })
};

@Injectable({
  providedIn: 'root'
})

export class PensionService {

  pensions: Pension[] = [];

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    @Inject('apiUrl') private apiUrl: string
  ) { }

  addPension (pension: Pension) {

    pension.fund_date = pension.date.toLocaleDateString();
    delete pension.date;

    // console.log(pension);

    return this.http.post<Pension>(`${this.apiUrl}pensions`, pension, httpOptions)
      .pipe(
        tap(
          // data => console.log(data)
        ),
        catchError(this.handleError('Pension Not Added', []))
      );
  }

  getPensions() {
    return this.http.get<any>(`${this.apiUrl}pensions/`)
  }

  getPensionByID(id: number) {  
    return this.http.get(`${this.apiUrl}pensions/` + id);
  }

  updatePension(pension: Pension) {

    return this.http.put(`${this.apiUrl}pensions/` + pension.id, pension, httpOptions);
  }

  deletePension(id: number) {

    return this.http.delete(`${this.apiUrl}pensions/` + id, httpOptions);
  }

  getReturns1() {
    return this.http.get(`${this.apiUrl}prices/returns_1`);
  }

  getReturns2() {
    return this.http.get(`${this.apiUrl}prices/returns_2`);
  }

  getReturns3() {
    return this.http.get(`${this.apiUrl}prices/returns_3`);
  }

  getReturns4() {
    return this.http.get(`${this.apiUrl}prices/returns_4`);
  }

  getInception1() {
    return this.http.get(`${this.apiUrl}prices/inception_1`);
  }

  getInception2() {
    return this.http.get(`${this.apiUrl}prices/inception_2`);
  }

  getInception3() {
    return this.http.get(`${this.apiUrl}prices/inception_3`);
  }

  getInception4() {
    return this.http.get(`${this.apiUrl}prices/inception_4`);
  }


  /** 
  * 
  * Handle  Http operation that failed
  * Let the app continue
  * @param operation -  name of the operation that failed
  * @param result - operation value to return as the observable result
  * */
  private handleError<T>(operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error);

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T)
    }
  }

  /** Log a AuthService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ProductsService: ${message}`);
  }

}