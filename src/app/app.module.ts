import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { NavbarComponent } from './comps/navbar/navbar.component';
import { HomeComponent } from './comps/home/home.component';
import { UsersComponent } from './comps/data/users/users.component';
import { TodosComponent } from './comps/data/todos/todos.component';
import { PostsComponent } from './comps/data/posts/posts.component';
import { CommentsComponent } from './comps/data/comments/comments.component';
import { AlbumsComponent } from './comps/data/albums/albums.component';
import { PhotosComponent } from './comps/data/photos/photos.component';
import { UserFormComponent } from './comps/data/user-form/user-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './modules/material';
import { TodoFormComponent } from './comps/data/todo-form/todo-form.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UsersComponent,
    TodosComponent,
    PostsComponent,
    CommentsComponent,
    AlbumsComponent,
    PhotosComponent,
    UserFormComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
