import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
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
import { TodoFormComponent } from './comps/data/todo-form/todo-form.component';
import { PostComponent } from './comps/data/items/post/post.component';
import { PostFormComponent } from './comps/data/post-form/post-form.component';
import { CommentFormComponent } from './comps/data/comment-form/comment-form.component';
import { LoginComponent } from './comps/login/login.component';
import { TodosBackboneComponent } from './comps/data/todos-backbone/todos-backbone.component';
import { TodoEditComponent } from './comps/data/todo-edit/todo-edit.component';
import { PostEditComponent } from './comps/data/post-edit/post-edit.component';
import { userReducer } from './services/redux/user.reducer';
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
    TodoFormComponent,
    PostComponent,
    PostFormComponent,
    CommentFormComponent,
    LoginComponent,
    TodosBackboneComponent,
    TodoEditComponent,
    PostEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatModule,
    StoreModule.forRoot({user_list: userReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
