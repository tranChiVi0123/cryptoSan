import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../_entities/Post';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const url: string = "https://cryptoipa.herokuapp.com/posts";
const token: string = JSON.parse(localStorage.getItem('userCRS')).token;
@Injectable({
  providedIn: 'root'
})
export class PostService {
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

  newPost(post: Post): Observable<any> {
    console.log(post);
    return this.httpClient.post<any>(url, post, this.httpOptions).pipe(
      catchError(this.handleError<any>())
    );
  }
  getPosts(): Observable<any> {
    return this.httpClient.get<any>(url).pipe(
      catchError(this.handleError<any>())
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // // TODO: send the error to remote logging infrastructure
      // // console.error(error); // log to console instead

      // // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
