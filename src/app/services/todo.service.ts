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
  todosByUser:Todo[]
  api:string = "https://localhost:3000/todos";

  constructor(  __http:HttpClient, private userService:UserService) { 
    super(__http,"todos");
    this.getData()
    this.dataBS.subscribe(data=>{
      if (data.length>0){
      this.data=data as Todo[]
      if (localStorage[this.childApi])
        this.data = this.data.concat(JSON.parse(localStorage[this.childApi]))
      if (userService.currentUser){
        this.getTodosByUser()
      }
    }
    })
  }
  
  
  getTodosByUser(){
   this.todosByUser = this.data.filter(todo => todo.userId==this.userService.currentUser.id)
    console.log("These are the values of the todosByUser",this.todosByUser);
    
  }
}


