import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SenderVinegere, SenderPlayfair, SenderCaesar } from '../_entities/Sender';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  vinegere(sender:SenderVinegere): Observable<any> {
    let url = "https://cryptoipa.herokuapp.com/vinegere"
    return this.httpClient.post(url,sender).pipe(
      catchError(this.handleError<any>())
    );
  }
  playfair(sender:SenderPlayfair): Observable<any> {
    let url = "https://cryptoipa.herokuapp.com/playfair"
    return this.httpClient.post(url,sender).pipe(
      catchError(this.handleError<any>())
    );
  }
  caesar(sender:SenderCaesar): Observable<any> {
    let url = "https://cryptoipa.herokuapp.com/caesar"
    return this.httpClient.post(url,sender).pipe(
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
