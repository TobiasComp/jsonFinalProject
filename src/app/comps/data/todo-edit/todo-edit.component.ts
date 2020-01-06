import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/todo';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
myTodo:Todo

todoFormGroup:FormGroup = this.fb.group({
  title:[''],
  completed:['']
}) 
  constructor(private activatedRoute:ActivatedRoute,private todoService:TodoService,
    private router:Router,private fb:FormBuilder) {
    activatedRoute.params.subscribe(data=>{
      this.myTodo = todoService.data.filter(todo=>todo.id==data.id)[0]
      
    })
    
   }

  ngOnInit() {
  }

  deleteTodo(){
    this.todoService.deleteTodo(this.myTodo.id)
    this.router.navigateByUrl('todos')

  }

  editTodo(){
    let editedTodo = this.todoFormGroup.value
    if (editedTodo.completed=="")
      editedTodo.completed = this.myTodo.completed
    if ( editedTodo.title=="")
      editedTodo.title = this.myTodo.title
    editedTodo.userId = this.myTodo.userId
    editedTodo.id = this.myTodo.id
    
    this.todoService.editTodo(editedTodo);
    this.router.navigateByUrl('todos')
    
  }
}
