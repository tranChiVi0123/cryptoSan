import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_entities/User';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const url: string = "https://cryptoipa.herokuapp.com/users/";
const urlLogin: string = "https://cryptoipa.herokuapp.com/users/login/";
const urlLogout: string = "https://cryptoipa.herokuapp.com/users/me/logout";
const token: string = JSON.parse(localStorage.getItem('userCRS')) ? JSON.parse(localStorage.getItem('userCRS')).token : "";
const userID: string = JSON.parse(localStorage.getItem('userCRS')) ? JSON.parse(localStorage.getItem('userCRS'))._id : "";
@Injectable({
  providedIn: 'root'
})

export class UsersService {
  auth_token: string = token;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
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
  getInfo():Observable<any>{
    let url:string = "https://cryptoipa.herokuapp.com/users/me/"+userID;
    return this.httpClient.get<any>(url, this.httpOptions).pipe(
      catchError(this.handleError<any>())
    );
  }
  getOwnerPost():Observable<any>{
    let url:string = "https://cryptoipa.herokuapp.com/users/post/"+userID;
    return this.httpClient.get<any>(url, this.httpOptions).pipe(
      catchError(this.handleError<any>())
    );
  }
  updateInfo(user:User):Observable<any>{
    let url:string = "https://cryptoipa.herokuapp.com/users/me/"+userID;
    return this.httpClient.put<any>(url,user,this.httpOptions).pipe(
      catchError(this.handleError<any>())
    );
  }
  logout(token: string): Observable<any> {
    const header = new HttpHeaders({
      //'Content-Type': 'application/json',==> fucking well
      'Authorization': `Bearer ${token}`
    })
    // console.log(header);
    return this.httpClient.post(urlLogout, "logout", { headers: header }).pipe(
      catchError(this.handleError<any>())
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead

      // // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
