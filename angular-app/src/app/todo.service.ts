import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Todo } from './todo';
import { Observable, of, Subscription, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const baseUrl : string = "http://localhost/todo/rest/public/" ;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root',
})

export class TodoService {
  todoList: Todo[];

  constructor(
    private http: HttpClient,
  ) { 
    this.getList();
  }

  save(todo : Todo) : Subscription {
    const url = `${baseUrl}todo/add`
    return this.http.post<Todo>(url, todo, httpOptions).pipe(
      tap((todo) => console.log(`added todo`)),
      catchError(this.handleError<Todo>('add todo'))
    ).subscribe((todo) => {
      this.getList();
    });
  }

  getList(): Subscription {
    const url = `${baseUrl}todo/list`
    return this.http.get<Todo[]>(url, httpOptions).pipe(
      tap(_ => console.log('feching todos')),
      map((response) => {
        let ret: Todo[] = [];
        for(var i = 0 ; i < response.length ; i++){
          let todo: Todo = new Todo();
          todo.fromJson(response[i]);
          ret.push(todo);
        }
        return ret;
      }),
      catchError(this.handleError('getList', []))
    ).
    subscribe((todoList) => {
      this.todoList = todoList;
    });
  }

  markDone(todo: Todo): Subscription {
    var value = 'n';
    if(todo.check){
      value = 'y';
    }
    const url = `${baseUrl}todo/mark-done/${todo.id}/${value}`
    return this.http.get<Todo>(url, httpOptions).pipe(
      tap(_ => console.log(`mark done todo : ${todo.check}`)),
      catchError(this.handleError('markDone', []))
    ).subscribe((todo) => {
    });
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
