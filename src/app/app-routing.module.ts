import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './comps/data/users/users.component';
import { TodosComponent } from './comps/data/todos/todos.component';
import { UserFormComponent } from './comps/data/user-form/user-form.component';
import { TodoFormComponent } from './comps/data/todo-form/todo-form.component';
import { PostsComponent } from './comps/data/posts/posts.component';
import { CommentsComponent } from './comps/data/comments/comments.component';
import { PostFormComponent } from './comps/data/post-form/post-form.component';
import { CommentFormComponent } from './comps/data/comment-form/comment-form.component';

const routes: Routes = [
  { path:'', component:UsersComponent},
  { path: "users", component:UsersComponent},
  { path: "todos", component:TodosComponent},
  { path: "posts", component:PostsComponent},
  { path: "addUser", component:UserFormComponent},
  { path: "addTodo", component:TodoFormComponent},
  { path: "comments", component:CommentsComponent},
  { path: "postForm", component:PostFormComponent},
  { path: "commentForm", component:CommentFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
