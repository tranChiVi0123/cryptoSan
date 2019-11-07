import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_entities/User';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const url: string = "https://cryptoipa.herokuapp.com/users/";
const urlLogin: string = "https://cryptoipa.herokuapp.com/users/login/";
@Injectable({
  providedIn: 'root'
})

export class UsersService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(url);
  }
  signUp(user: User): Observable<any> {
    return this.httpClient.post<any>(url, user, this.httpOptions);
  }
  signIn(user: User): Observable<any> {
    return this.httpClient.post<any>(urlLogin, user, this.httpOptions).pipe(
      catchError(this.handleError<any>())
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead

      // // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
