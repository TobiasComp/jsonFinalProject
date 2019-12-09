import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  api:string = "https://jsonplaceholder.typicode.com/todos";
  todos:Todo[]

  constructor(private http:HttpClient, private userService:UserService) { 
    this.getAllTodos();
  }
  
  getAllTodos() {
    this.http.get(this.api)
      .subscribe(data => this.todos = data as Todo[])
  }

  getTodosByUser():Observable<Todo[]>{
    
    return this.http.get<Todo[]>(this.api+"?userId="+this.userService.currentUser.id)
  }
}


