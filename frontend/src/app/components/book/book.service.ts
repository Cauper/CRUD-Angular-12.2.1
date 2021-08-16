import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Book } from '../book/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = "http://localhost:3001/books"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean=false):void {
    this.snackBar.open(msg,'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
      
    })
  } 
  
  read(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.ErrorHandler(e))
    )
  }
  
  readById(id: string | null): Observable<Book> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Book>(url).pipe(
      map(obj => obj),
      catchError(e => this.ErrorHandler(e))
    )
  }
  

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(this.baseUrl, book).pipe(
      map(obj => obj),
      catchError(e => this.ErrorHandler(e))
    )
  }

  update(product: Book): Observable<Book> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Book>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.ErrorHandler(e))
    )
  }


  delete(id: number | undefined): Observable<Book> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Book>(url).pipe(
      map(obj => obj),
      catchError(e => this.ErrorHandler(e))
    )
  }


  ErrorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!!', true)
    return EMPTY

  }
}
