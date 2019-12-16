import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  postFormGroup:FormGroup = this.fb.group({
    title:[''],
    body:['']
  }) 
  constructor(private fb:FormBuilder, private userService:UserService,
    private postService:PostService,private router:Router) { }

  ngOnInit() {
  }
  
  addPost(){
    let newPost = this.postFormGroup.value
    newPost.userId = this.userService.currentUser.id
    newPost.id = this.postService.data.length + 1;
    this.postService.addDataItem(newPost);
    console.log(this.postService.data);
    console.log(this.postService.postsByUser);
    
    this.router.navigateByUrl("posts");
  }

}
