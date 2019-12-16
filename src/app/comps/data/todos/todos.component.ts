import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { UserService } from 'src/app/services/user.service';
import { Todo } from 'src/app/models/todo';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // todos:Todo[]
  display:string

  constructor(public todoService:TodoService, private userService:UserService,
    private router:Router) { }

  ngOnInit() {
    
    if (this.userService.currentUser){
      this.todoService.getTodosByUser()
      this.display = 'byUser'
    }
    else  
      this.display = 'all'
  }

  choice(ev){
     if (this.userService.currentUser){
      this.display = (ev.target.value == 'byUser' ? 'byUser' : 'all');
      console.log("this is the value of display",this.display)
      console.log("this is the current user",this.userService.currentUser);
      this.todoService.getTodosByUser()  
    }
    else
      this.display = 'all'
    }

    addTodoForm(){
      this.router.navigateByUrl("addTodo")
    }

}
