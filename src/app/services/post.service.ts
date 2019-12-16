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
  constructor(__http:HttpClient, private userService:UserService, ) { 
    super(__http,"posts")
    // this.getData().subscribe( d => {
    //   this.data = d
    //   if (localStorage[this.childApi])
    //     this.data = this.data.concat(JSON.parse(localStorage[this.childApi]))
    //   if (userService.currentUser)
    //     this.getPostsByUser()
    // })
    this.getData()
    this.dataBS.subscribe(data=>{
      if (data.length>0) {
        // console.log("This is the value of the callback",data);
        
        this.data = data 
        // if (localStorage[this.childApi])
        //   this.data = this.data.concat(JSON.parse(localStorage[this.childApi]))
        if (this.localStorageData)
          this.data = this.data.concat(this.localStorageData)
        if (userService.currentUser)
          this.getPostsByUser()
        // console.log("Has the data arrived yet?",this.data);
      
        this.lastNumberOfPosts(5)
      }
    })
  }

  lastNumberOfPosts(amount:number){
    //this is a fix which is not good I don't understand how the 
    //data object already has the items from the localStorage??
   
      let len = this.data.length
      
      console.log("this is the length of the post array",this.data);
      
      for(let i=len-1; i>=len-amount; i--)
        this.lastPosts.push(this.data[i])
      console.log(this.lastPosts);
      
    
  }

  getPostsByUser(){
    this.postsByUser =  this.data.filter(post=>post.userId==this.userService.currentUser.id)
  }
}
