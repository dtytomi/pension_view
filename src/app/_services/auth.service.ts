import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";

import { User } from "../_models";
import { MessageService } from "./message.service";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json; charset=utf-8'
  })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

  private eventLoginError = new BehaviorSubject<any>('');
  eventLoginError$ = this.eventLoginError.asObservable()

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    @Inject('apiUrl') private apiUrl: string
  ) { }

  login(user: User): Observable<User> {

    return this.http.post<User>(`${this.apiUrl}users/login`, user, httpOptions)
      .pipe(
        map(user => {
          if (user && user.access_token) {
            console.log(user.access_token);
            
            localStorage.setItem('currentUser', JSON.stringify(user.access_token));
          }
          this.setLoggedIn(true);
          return user;
        }), 
        catchError(this.handleError('login User', user))
      );
  }

  register(user: User): Observable<User> {

    return this.http.post<User>(`${this.apiUrl}users`, user, httpOptions)
      .pipe(
        map(user => {
          if (user && user.access_token) {
            localStorage.setItem('currentUser', JSON.stringify(user.access_token));
            return user;
          }
        }),
        catchError(this.handleError('adduser', user))
      );
  }

  logout() {

    // remove user from local storage to log user out
    localStorage.clear();
     this.setLoggedIn(false);

    // return this.http.get(`${this.apiUrl}users/logout/${id}`)
    //   .pipe(
    //     tap(_ => this.log("logout successfully")),
    //     catchError(this.handleError('logout', []))
    //   )
  }

  setLoggedIn(value: boolean) {

    // Update login status subject
    this.loggedIn$.next(value);
    this.loggedIn = value;
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

      // TODO: send the error ti remote logging infrastructure
      console.error(error);

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T)
    }
  }

  /** Log a AuthService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`AuthenticationService: ${message}`);
  }

}
