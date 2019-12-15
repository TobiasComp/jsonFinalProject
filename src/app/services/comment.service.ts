import { Injectable } from '@angular/core';
import { BaseServiceService } from './base-service.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Post } from '../models/post';
import { PostComment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService extends BaseServiceService<PostComment>{
  
  currentPost:Post
  commentsByCurrentPost:PostComment[]

  constructor(__http:HttpClient,userService:UserService) {
    super(__http,"comments") 
    this.getData()
    this.dataBS.subscribe(data=>{
      this.data = data 
      if (localStorage[this.childApi])
        this.data = this.data.concat(JSON.parse(localStorage[this.childApi]))
      
    })
  }

  getCommentsByPost(){

  }
}
