import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './comps/data/users/users.component';
import { TodosComponent } from './comps/data/todos/todos.component';
import { UserFormComponent } from './comps/data/user-form/user-form.component';
import { TodoFormComponent } from './comps/data/todo-form/todo-form.component'

const routes: Routes = [
  { path: "users", component:UsersComponent},
  { path: "todos", component:TodosComponent},
  { path: "addUser", component:UserFormComponent},
  { path: "addTodo", component:TodoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
