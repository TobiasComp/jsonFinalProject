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
  lastPosts:Post[] = []
  api:string = "http://localhost:3000/posts/";

  constructor(__http:HttpClient, private userService:UserService, ) { 
    super(__http,"posts")
    this.getData()
    this.dataBS.subscribe(data=>{
      if (data.length>0) {
        
        this.data = data 
        /* if (this.localStorageData)
          this.data = this.data.concat(this.localStorageData) */
        if (userService.currentUser)
          this.getPostsByUser()
      
        this.lastNumberOfPosts(10)
      }
    })
  }

  lastNumberOfPosts(amount:number){
   
      let len = this.data.length
      
      // console.log("this is the length of the post array",this.data);
      
      for(let i=len-1; i>=len-amount; i--)
        this.lastPosts.push(this.data[i])
      // console.log(this.lastPosts);
      
    
  }

  getPostsByUser(){
    this.postsByUser =  this.data.filter(post=>post.userId==this.userService.currentUser.id)
  }

  // DELETE REQUEST
  deletePost(id){
    let index = 0;
    this.deleteItem(id).subscribe(res=>{
     this.data.forEach(post=>{
       if (post.id==id) 
         this.data.splice(index,1)
       index++;
     })
     this.getPostsByUser()

   },err=>{
     if (err)
       console.log("an error has occured",err);
   })
  }
  editPost(editedPost){
    let index=0;
  this.data.forEach(todo => {
    if (todo.id==editedPost.id)
      this.data[index] = editedPost
    index++;
  }); 
  this.getPostsByUser()
  
  // PUT REQUEST TO THE SERVER(Loopback)
  this.http.put(this.api+editedPost.id, editedPost).subscribe(res=>{
    //console.log("this is the response from the edit");  
  },err=>{
    if (err)
      console.log("an error has occured",err);
  })
  }


}
