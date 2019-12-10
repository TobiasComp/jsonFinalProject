import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { BaseServiceService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends BaseServiceService<Todo> {
  
  api:string = "https://jsonplaceholder.typicode.com/todos";
  todos:Todo[]

  constructor(  __http:HttpClient, private userService:UserService) { 
    super(__http,"todos");
    this.getData().subscribe(data=>this.todos=data as Todo[])
  }
  
  // getAllTodos() {
  //   this.http.get(this.api)
  //     .subscribe(data => this.todos = data as Todo[])
  // }
  
  getTodosByUser():Todo[]{
    console.log("this.userService.currentUser.id",this.userService.currentUser.id);
    console.log(this.todos.filter(todo => todo.userId==this.userService.currentUser.id));
    
    return this.todos.filter(todo => todo.userId==this.userService.currentUser.id)
  }
}


