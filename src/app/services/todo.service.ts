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
  api:string = "http://localhost:3000/todos/";

  constructor(  __http:HttpClient, private userService:UserService) { 
    super(__http,"todos");
    this.getData()
    this.dataBS.subscribe(data=>{
      if (data.length>0){
        this.data=data as Todo[]
      console.log("These are all the todos",data);
      
      /* if (localStorage[this.childApi])
        this.data = this.data.concat(JSON.parse(localStorage[this.childApi])) */
        if (userService.currentUser){
          this.getTodosByUser()
        }
      }
    })
  }
  
  // PATCH (Click on the completed box)
  getTodosByUser(){
   this.todosByUser = this.data.filter(todo => todo.userId==this.userService.currentUser.id)
    //console.log("These are the values of the todosByUser",this.todosByUser);  
  }

  changeCompleted(checkedStatus, id){
    this.http.patch(this.api+id,{completed:checkedStatus}).subscribe(res=>{
      console.log("This is the response",res);
    },err =>{
    if (err)
      console.log("an error has occured",err);
    })
  
}

// DELETE REQUEST
deleteTodo(id){
  
  let index = 0;
  this.http.delete(this.api+id).subscribe(res=>{
    this.data.forEach(todo=>{
      if (todo.id==id) 
        this.data.splice(index,1)
      index++;
    })
    this.getTodosByUser()

  },err=>{
    if (err)
      console.log("an error has occured",err);
  })
}

// PUT REQUEST
editTodo(editedTodo){
  // UPDATES THE LOCAL ARRAY  
  let index=0;
  this.data.forEach(todo => {
    if (todo.id==editedTodo.id)
      this.data[index] = editedTodo
    index++;
  }); 
  this.getTodosByUser()
  
  // PUT REQUEST TO THE SERVER(Loopback)
  this.http.put(this.api+editedTodo.id, editedTodo).subscribe(res=>{
    //console.log("this is the response from the edit");  
  },err=>{
    if (err)
      console.log("an error has occured",err);
  })
}


}
