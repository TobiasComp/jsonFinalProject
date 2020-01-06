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
import { AlbumsComponent } from './comps/data/albums/albums.component';
import { PhotosComponent } from './comps/data/photos/photos.component';
import { LoginComponent } from './comps/login/login.component';
import { HomeComponent } from './comps/home/home.component';
import { TodosBackboneComponent } from './comps/data/todos-backbone/todos-backbone.component';
import { TodoEditComponent } from './comps/data/todo-edit/todo-edit.component';

const routes: Routes = [
  { path:'', component:LoginComponent},
  { path:'login', component:LoginComponent},
  { path:"home", component:HomeComponent},
  { path: "users", component:UsersComponent},
  { path: "todos", component:TodosComponent},
  { path: "editTodo/:id", component:TodoEditComponent},
  { path: "posts", component:PostsComponent},
  { path: "addUser", component:UserFormComponent},
  { path: "addTodo", component:TodoFormComponent},
  { path: "comments", component:CommentsComponent},
  { path: "postForm", component:PostFormComponent},
  { path: "commentForm", component:CommentFormComponent},
  { path: "albums", component:AlbumsComponent},
  { path: "photos", component:PhotosComponent},
  { path: "todosBackbone", component:TodosBackboneComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
