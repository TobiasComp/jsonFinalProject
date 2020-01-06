import { Component, OnInit, AfterContentInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-todos-backbone',
  templateUrl: './todos-backbone.component.html',
  styleUrls: ['./todos-backbone.component.css']
})
export class TodosBackboneComponent implements OnInit {
  

  constructor(private todoService:TodoService, private userService:UserService,
    private router:Router) { }

  ngOnInit() {
    this.todoService.dataBS.subscribe(data=>{
      if (data.length>0){
      /* if (localStorage[this.childApi])
        this.data = this.data.concat(JSON.parse(localStorage[this.childApi])) */
      if (this.userService.currentUser){
        this.todoService.getTodosByUser()
      }
      
      }
    })
    
  }
  
  addTodo(event){
    
  }
  updateCheckboxes(event, completed){
    console.log("this is the event when the page loads",event);
    
    event.target.checked = completed     
  }
}
/* function getAllTodos() {
  var x = new XMLHttpRequest();
  x.onreadystatechange = function () {
    if (this.readyState == 4 && this.status < 300) {
      let theList = document.getElementById('todo-list')
      let arr = JSON.parse(this.responseText);
      arr.forEach(todo => {
        todos.push(todo)
        console.log(todo.completed);

        theList.innerHTML += `<li>
          <div class="view">
            <input class="toggle" type="checkbox" onclick="editTodo(event, ${todo.id})">
          <label ondblclick="editTodoTitle(event, ${todo.id})">${todo.title}</label>
          <a class="destroy" onclick="deleteTodo(event, ${todo.id})"></a>
          </div>
          </li>`
      });
    }
  };
  x.open("GET", "http://localhost:3000/todos");
  x.send();
} */