import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  
  addTodoForm = this.fb.group({
    title: [''],
  })

  constructor(private fb:FormBuilder, private todoService:TodoService,
    private router:Router, private userService:UserService) { }

  ngOnInit() {
  }

  addTodo(){   
    // Creating new Todo
    let todo = this.addTodoForm.value    
    todo.id = this.todoService.data.length+1
    todo.completed = false
    todo.userId = this.userService.currentUser.id
    
    // Pushing into general array 
    this.todoService.data.push(todo)    
    
    // redirecting to todos page
    this.router.navigateByUrl("todos")
  }
}
