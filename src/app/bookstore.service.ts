import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookstoreService {
  constructor(private _http: HttpClient) {}
  getBooksFromServer(): Observable<any> {
    return this._http.get<any>('http://localhost:8080/bookStore/');
  }
  addbookFormSubmit(book: Book): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    console.log(book);
    return this._http
      .post(
        'http://localhost:8080/bookStore',
        {
          name: book.name,
          author: book.author,
          year: book.year,
          price: book.price,
        },
        { headers: headers }
      )
      .pipe();
  }

  deleteBook(id: number) {
    return this._http.delete<any>('http://localhost:8080/bookStore/' + id);
  }

  getOldestBooksFromServer(): Observable<any> {
    return this._http.get<any>('http://localhost:8080/bookStore/oldest/');
  }

  getLatestBooksFromServer(): Observable<any> {
    return this._http.get<any>('http://localhost:8080/bookStore/latest/');
  }
}
