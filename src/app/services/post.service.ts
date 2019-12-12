import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { BaseServiceService } from './base-service.service';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseServiceService<Post>{

  postsByUser:Post[]
  constructor(__http:HttpClient, private userService:UserService) { 
    super(__http,"posts")
    this.getData().subscribe( d => {
      this.data = d
      if (localStorage[this.childApi])
        this.data = this.data.concat(JSON.parse(localStorage[this.childApi]))
      if (userService.currentUser)
        this.getPostsByUser()
    })
  }
  getPostsByUser(){
    this.postsByUser =  this.data.filter(post=>post.userId==this.userService.currentUser.id)
  }
}
