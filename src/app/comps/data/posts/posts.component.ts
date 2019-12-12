import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  display:string
  // posts:Post[]

  constructor(private userService:UserService, private postService:PostService) { }

  ngOnInit() {
    if (this.userService.currentUser){
      this.display = 'byUser'
    }
    else  
      this.display = 'all'
  }

  choice(ev){
    
     if (this.userService.currentUser && ev.target.value=='byUser'){
      this.display = 'byUser' 
        this.postService.getPostsByUser()
      }
      else
        this.display = 'all'
      
    }
  
}
