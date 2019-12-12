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
  api:string = "https://jsonplaceholder.typicode.com/todos";

  constructor(  __http:HttpClient, private userService:UserService) { 
    super(__http,"todos");
    this.getData().subscribe(data=>{
      this.data=data as Todo[]
      this.data = this.data.concat(JSON.parse(localStorage[this.childApi]))
       if (userService.currentUser){
        console.log(userService.currentUser);
        
         this.getTodosByUser()
        
      }
    })
  }
  
  
  getTodosByUser(){
   this.todosByUser = this.data.filter(todo => todo.userId==this.userService.currentUser.id)
    console.log("These are the values of the todosByUser",this.todosByUser);
    
  }
}


